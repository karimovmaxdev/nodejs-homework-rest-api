const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
    
const dbConnect = async function (DB_HOST) {
    try {
        await mongoose.connect(DB_HOST)
        console.log("Database connection successful")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = {
    dbConnect
}