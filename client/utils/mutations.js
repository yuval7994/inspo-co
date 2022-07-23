import { gql } from "@apollo/client"

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`
export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`
export const ADD_COMMENT = gql`
mutation addComment($commentText: String!) {
    addComment(commentText: $commentText) {
        comment {
            _id: ID
            commentText: String
            createdAt: String
            username: String
            reactionCount: Int
            reactions: [Reaction]
        }
    }
}
`
export const ADD_REACTION = gql`
  mutation addReaction($commentId: ID!) {
    addReaction(commentId: $commentId) {
      reaction {
        _id: ID
        reactionBody: String
        createdAt: String
        username: String
      }
    }
  }
`
export const ADD_LIKE = gql`
  mutation addLike($photoId: ID!) {
    addLike(photoId: $photoId) {
      photo {
        _id
        photo_name: String
        photo_url: String
        liked: User
        unliked: User
      }
    }
  }
`
export const ADD_DISLIKE = gql`
  mutation addDislike($photoId: ID!) {
    addDislike(photoId: $photoId) {
      photo {
        _id: ID
        photo_name: String
        photo_url: String
        liked: User
        unliked: User
      }
    }
  }
`
export const SAVE_PHOTO = gql`
  mutation savePhoto($photoId: ID!) {
    savePhoto(photoId: $photoId) {
      user {
        _id: ID
        username: String
        email: String
        comment {
            _id: ID
            commentText: String
            createdAt: String
            username: String
            reactionCount: Int
            reactions: [Reaction]
        }
        likes {
            _id: ID
            photo_name: String
            photo_url: String
            liked: User
            unliked: User
        }
      }
    }
  }
  `
export const SHARE_PHOTO = gql`
mutation sharePhoto($username: String!, $photoId: ID!) {
    sharePhoto(username: $username, photoId: $photoId) {
        user {
            _id: ID
            username: String
            email: String
            comments {
                _id: ID
                commentText: String
                createdAt: String
                username: String
                reactionCount: Int
                reactions: [Reaction]
            }
            likes { 
                _id: ID
                photo_name: String
                photo_url: String
                liked: User
                unliked: User
                
            }
          }
    }
}
`
