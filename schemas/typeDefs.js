const { gql } = require("apollo-server-express")

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    likes: Photo
  }

  type Photo {
    _id: ID
    photo_name: String
    photo_url: String
    liked: User
  }

 

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addLike(photoId: ID!): Photo
    savePhoto(photoId: ID!): User
  }
`

module.exports = typeDefs
