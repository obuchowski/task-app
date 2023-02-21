const { app, express, userRouter, taskRouter, mongoose } = require('../src/app')
const serverless = require('serverless-http')

const router = express.Router()

app.use((req, res, next) => {
    mongoose.connect(process.env.MONGODB_URI)
    res.on('finish', () => {
        mongoose.connection.close()
    });
    next();
});

router.get('/', (req, res) => {
    res.send('<h2>Welcome to Task App!</h2>')
})

app.use('/.netlify/functions/task-app', router)
app.use('/.netlify/functions/task-app', userRouter)
app.use('/.netlify/functions/task-app', taskRouter)

module.exports.handler = serverless(app)