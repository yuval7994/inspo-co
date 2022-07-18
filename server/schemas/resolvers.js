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
          .populate("friends")

        return userData
      }

      throw new AuthenticationError("Not logged in")
    },
    users: async () => {
      return User.find()
        .select("-__v -password")
        .populate("comments")
        .populate("friends")
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("friends")
        .populate("comments")
    },
    comments: async (parent, { username }) => {
      const params = username ? { username } : {}
      return Comment.find(params).sort({ createdAt: -1 })
    },
    comments: async (parent, { _id }) => {
      return Comment.findOne({ _id })
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
    addComment: async (parent, args, context) => {
      if (context.user) {
        const comment = await Comment.create({
          ...args,
          username: context.user.username,
        })

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { comments: comment._id } },
          { new: true }
        )

        return comment
      }

      throw new AuthenticationError("You need to be logged in!")
    },
    addReaction: async (parent, { commentId, reactionBody }, context) => {
      if (context.user) {
        const updatedComment = await Comment.findOneAndUpdate(
          { _id: commentId },
          {
            $push: {
              reactions: { reactionBody, username: context.user.username },
            },
          },
          { new: true, runValidators: true }
        )

        return updatedComment
      }

      throw new AuthenticationError("You need to be logged in!")
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
    addDislike: async (parent, { photoId }, context) => {
      if (context.user) {
        const updatedPhoto = await Photo.findOneAndUpdate(
          { _id: photoId },
          { $push: { unliked: context.user._id } },
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

    sharePhoto: async (parent, { photoId, userId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { username },
          { $push: { shares: photoId } },
          { new: true, runValidators: true }
        )
        return updatedUser
      }
    },
  },
}

module.exports = resolvers