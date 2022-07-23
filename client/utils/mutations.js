import { gql } from "@apollo/client"

export const LOGIN = gql`
  mutation login($email: String!, $password: : String!) {
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
    $firstName:String!
    $lastName : String!
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

export const ADD_LIKE = gql`
  mutation addLike($photoId: ID!) {
    addLike(photoId: $photoId) {
      photo {
        _id
        photo_name
    }
  }
}
`

export const SAVE_PHOTO = gql`
  mutation savePhoto($photoId: ID!) {
    savePhoto(photoId: $photoId) {
      user {
        _id: ID
        username
      }
    }
  }
  `
