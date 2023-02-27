const process = require('process')
const { Firestore } = require('@google-cloud/firestore')

const handler = async function (event) {
    const firestore = new Firestore({
        projectId: process.env.GOOGLE_APPLICATION,
        credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, "\n"),
        }
    })
    const tasksRef = firestore.collection('tasks'),
        snapshot = await tasksRef.get(),
        response = {}
    snapshot.forEach((doc) => {
        response[doc.id] = doc.data()
    })

    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }
}

module.exports = { handler }
