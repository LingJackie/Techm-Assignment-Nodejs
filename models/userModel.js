const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: Number,
    firstName: String,
    lastName: String,
    birthday: String,
    email: String,
    phoneNum: String,
    username: String,
    city: String,
    state: String,
    zipCode: String,
    createdAt: Date,
})
module.exports = mongoose.model('User', userSchema);