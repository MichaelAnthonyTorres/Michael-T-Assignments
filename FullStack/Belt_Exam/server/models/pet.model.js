const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Pet name required'],
        minlength: [3, 'Pet name must be atleast 3 characters long!!!']
    },

    species: {
        type: String,
        required: [true, 'Pet type is required'],
        minlength: [3, 'Pet type must be at least 3 characters long!!!']
    },

    description: {
        type: String,
        required: [true, 'Pet description is required'],
        minlength: [3, 'description must be atleast 3 characters long!!!']
    },

    skill: {
        type: String
    }
})

module.exports = mongoose.model('Pet', PetSchema)