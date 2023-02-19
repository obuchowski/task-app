const {MongoClient, ObjectId} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('tasks').deleteOne({
    //         description: 'Pot plans'
    //     }
    // ).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Evgeni',
    //     age: 28
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user.')
    //     }
    //
    //     console.log(result)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 27
    //     },
    //     {
    //         name: 'John',
    //         age: 32
    //     },
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user.')
    //     }
    //
    //     console.log(result)
    // })
    //
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },
    //     {
    //         description: 'Renew inspection',
    //         completed: false
    //     },
    //     {
    //         description: 'Pot plans',
    //         completed: true
    //     },
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert task.')
    //     }
    //
    //     console.log(result)
    // })
})