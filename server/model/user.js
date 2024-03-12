const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email');
            }
        },
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    firstname: {
        type: String,
        trim: true,
        maxLength: 100,
    },
    lastname: {
        type: String,
        trim: true,
        maxLength: 100,
    },
    age: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    verified: {
        type: Boolean,
        default: false,
    },
});

const User = mongoose.Model('User', userSchema);
module.exports = { User };
