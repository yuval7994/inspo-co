import { gql } from "@apollo/client"

export const QUERY_USER = gql`
query user($username!) {
  user(username: $username) {
    _id
    username
    email
    likes {
      _id
      photo_name
    }
}

`
export const QUERY_PHOTO = gql`
  {
    Photo {
      _id: ID
      photo_name
      photo_url
      liked
    }
  }
`
