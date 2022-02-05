import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyCLJtK2BFH1dEqZNwDq_MWwLkYO1YVsCCU",
    authDomain: "bchacks2022-b87ea.firebaseapp.com",
    projectId: "bchacks2022-b87ea",
    storageBucket: "bchacks2022-b87ea.appspot.com",
    messagingSenderId: "589655340700",
    appId: "1:589655340700:web:a1085de91a098dfc659f59",
    measurementId: "G-NMV6HZS256"
})

export const auth = app.auth()
export default app