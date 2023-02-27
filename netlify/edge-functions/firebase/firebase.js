import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js'
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js'

// import { initializeApp } from './firebase-app.js'
// import { getFirestore, collection, getDocs } from './firestore9.17.1.js'

const firebaseConfig = {
    projectId: Deno.env.get('GOOGLE_APPLICATION'),
    apiKey: Deno.env.get('GOOGLE_API_KEY'),
    authDomain: Deno.env.get('GOOGLE_AUTH_DOMAIN'),
    storageBucket: Deno.env.get('GOOGLE_STORAGE_BUCKET'),
    messagingSenderId: Deno.env.get('GOOGLE_MESSAGE_SENDER_ID'),
    appId: Deno.env.get('GOOGLE_APP_ID'),
}

const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export default async (request, context) => {
    const q = collection(firestore, 'tasks'),
        snapshot = await getDocs(q),
        response = {}

    snapshot.forEach((doc) => {
        response[doc.id] = doc.data();
    })

    console.log(response)

    return Response.json(response)
};