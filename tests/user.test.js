const request = require('supertest')
const { app, mongoose } = require('../src/app')
mongoose.connect(process.env.MONGODB_URI)

test('Should sign up a new user', async () => {
    await request(app).post('/users').send({
        name: 'Andrew1',
        email: 'andrew111@example.com',
        password: 'MyPass777!'
    }).expect(201)
})