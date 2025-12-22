const mongoose = require('mongoose')

const connectionDB = async () => {
    try{
        if(!process.env.MONGO_URI){
            throw new Error('MONGO_URI environment variable is not set')
        }
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB connected')
    }catch(e){
        console.log('Connection Error:', e.message)
        throw e
    }
}

module.exports = connectionDB 