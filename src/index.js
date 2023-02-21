const { app, mongoose } = require('./app')

const port = process.env.PORT
mongoose.connect(process.env.MONGODB_URI)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})