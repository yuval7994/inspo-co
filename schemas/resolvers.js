const { AuthenticationError } = require("apollo-server-express")
const { User, Comment, Photo } = require("../models")
const { signToken } = require("../utils/auth")

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("comments")
          

        return userData
      }

      throw new AuthenticationError("Not logged in")
    },
    users: async () => {
      return User.find()
        .select("-__v -password")
        .populate("comments")
        
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        
        .populate("comments")
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args)
      const token = signToken(user)

      return { token, user }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email })

      if (!user) {
        throw new AuthenticationError("Incorrect credentials")
      }

      const correctPw = await user.isCorrectPassword(password)

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials")
      }

      const token = signToken(user)
      return { token, user }
    },
    addLike: async (parent, { photoId }, context) => {
      if (context.user) {
        const updatedPhoto = await Photo.findOneAndUpdate(
          { _id: photoId },
          { $push: { liked: context.user._id } },
          { new: true, runValidators: true }
        )
        return updatedPhoto
      }
    },
    
    savePhoto: async (parent, { photoId }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { likes: photoId } },
          { new: true, runValidators: true }
        )
        return updatedUser
      }
    },
  },
}

module.exports = resolvers