const mongoose  = require('mongoose')
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
})