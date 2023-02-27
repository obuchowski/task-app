const request = require('supertest')
const User = require('../src/models/user')
const { app, mongoose } = require('../src/app')

mongoose.connect(process.env.MONGODB_URI)

const UserOne = {
    name: 'Mike',
    email: 'mike@example.com',
    password: '56what!!'
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(UserOne).save()
})

afterAll(() => {
    mongoose.disconnect()
})


test('Should sign up a new user', async () => {
    await request(app).post('/users').send({
        name: 'Andrew1',
        email: 'andrew@example.com',
        password: 'MyPass777!'
    }).expect(201)
})

test('Should login existing user', async () => {
    await request(app).post('/users/login').send({
        email: UserOne.email,
        password: UserOne.password
    }).expect(200)
})

test('Should not login nonexistent user', async () => {
    await request(app).post('/users/login').send({
        email: UserOne.email,
        password: 'thisisnotmypass'
    }).expect(400)
})