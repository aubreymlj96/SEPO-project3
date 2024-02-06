const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const sportSchema = new Schema ({
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

    eventId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
});


module.exports = sportSchema;