import type { Context, Request } from 'https://edge.netlify.com'
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js'
import { getFirestore, collection, getDocs, Firestore, CollectionReference } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js'

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
const firestore: Firestore = getFirestore(app)

// This is just a helper to add the type to the db responses
const createCollection = <T>(collectionName: string) => {
    return collection(firestore, collectionName) as CollectionReference<T>
}

export default async (request: Request, context: Context) => {
    const q = createCollection<unknown>('tasks'),
        snapshot = await getDocs(q),
        data: object = {}

    snapshot.forEach((doc) => {
        data[doc.id] = doc.data();
    })

    return Response.json(data)
}