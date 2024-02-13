const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const sportSchema = new Schema ({
  name: {
    type: String,
    required: true,
  },
  players: {
    type: String,
    required: true
  },

  playerIds: [
    {
        type: Schema.Types.ObjectId,
        ref: 'User',

    },
],

    eventCreator:{
        type: String,
        required: true,
        trim: true,
    },
    eventText:{
        type: String,
    required: 'The event needs some details.',
    minlength: 1,
    maxlength: 280,
    trim: true,
    },
    eventType: {
      type: String,
      enum: ['Football','Baseball', 'Basketball']
    },
    location: {
type: String,
    },

    createdAt: {
        type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
    },

    comments: [
        {
          commentText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
          },
          commentAuthor: {
            type: String,
            required: true,
          },
          createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
          },
          username: {
            type:String
          }
        },
      ],
});

const Sport = model('Sport', sportSchema);


module.exports = Sport;