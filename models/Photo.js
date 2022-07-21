const {Schema, model} = require('mongoose')

const photoSchema = new Schema(
    {
        photo_name: {
            type: String,
            required: true
        },
        photo_url: {
            type: String,
            required: true
        },
        liked: [
            {
              type: Schema.Types.ObjectId,
              ref: 'User'
            }
          ],
        unliked: [
            {
              type: Schema.Types.ObjectId,
              ref: 'User'
            }
          ]
    
    },
        {
        toJSON: {
        virtuals: true
        }
    }
)

const Photo = model('Photo', photoSchema)

module.exports = Photo;