import { gql } from "@apollo/client"

export const QUERY_USER = gql`
{
    User {
        _id: ID
        username: String
        email: String
        comments {
          thoughtText
          createdAt
          username
          reactions
        }
        likes {
          photo_name
          photo_url
          liked
          unliked
        }
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
        reactions {
          reactionBody
          username
          createdAt
        }
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
