const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const sportSchema = new Schema ({
    name: {
      type: String,
      required: true,
    },
    players: {
      type: Number,
      required: true
    },
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
        },
      ],
});


module.exports = sportSchema;