import { gql } from "@apollo/client"

export const QUERY_USER = gql`
{
    User {
        _id: ID
        username: String
        email: String
        comments: [Comment]
        likes: Photo
      }
}
`
export const QUERY_PHOTO = gql`
  {
    Photo {
      _id: ID
      photo_name: String
      photo_url: String
      liked: User
      unliked: User
    }
  }
`
export const QUERY_COMMENT = gql`
{
    Comment {
        _id: ID
        commentText: String
        createdAt: String
        username: String
        reactionCount: Int
        reactions: [Reaction]
      }
}
`
export const QUERY_REACTION = gql`
  {
    Reaction {
      _id: ID
      reactionBody: String
      createdAt: String
      username: String
    }
  }
`
