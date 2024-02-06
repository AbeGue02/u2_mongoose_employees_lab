const mongoose = require('mongoose') //Pulls Mongoose information

mongoose
    .connect('mongodb://127.0.0.1:27017/booksDatabase')
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch((e) => {
        console.error("Error! ", e.message)
    })

mongoose.set('debug', true)

// From now on, we use db to access our database
const db = mongoose.connection

module.exports = db