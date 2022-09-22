const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:4200'
}));

// Grabs variables from .env file
require('dotenv').config();
const dbURL = process.env.DATABASE_URL

app.listen(3000, () => {
    console.log(`Backend Server Started at ${3000}`)
})


// All endpoints calls go through api
var users = require('./routes/users');
app.use('/api', users);


mongoose.Promise = global.Promise;



//$ md c:\data\db
//$ mongod



mongoose.connect(dbURL)
    .then(() => console.log('Connected to mongoDb'))
    .catch(err => console.error(err.stack));


// const userSchema = new mongoose.Schema({
//     firstName: String,
//     lastName: String,
//     birthday: String,
//     email: String,
//     phoneNum: String,
//     username: String,
//     city: String,
//     state: String,
//     zipCode: String,
// })

// const User = mongoose.model('User', userSchema)
// async function addUser(){
//     const testUser = new User({
//         firstName: 'Jackie',
//         lastName: 'Ling',
//         birthday: '9/25/98',
//         email: 'String@gmail.com',
//         phoneNum: '1234567890',
//         username: 'guy1234',
//         city: 'brooklyn',
//         state: 'NY',
//         zipCode: '10923',
//     });
//     const result = await testUser.save();
//     console.log(result);
// }
// addUser();