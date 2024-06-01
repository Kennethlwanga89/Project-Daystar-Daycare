const mongoose = require('mongoose');
const registerBabySchema = new mongoose.Schema ({
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    age: {
        type: Number,
        trim: true,
        required: true
    },
    dob: {
        type: Date,
        trim: true
    },
    gender: {
        type: String,
        trim: true,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
    motherName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('RegisterBaby', registerBabySchema)