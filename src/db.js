import firebase from 'firebase'
import 'firebase/firestore'

// firebase init
const firebaseConfig = {
  apiKey: "AIzaSyCrkAD1mxJFD8ifUBfxBly6GM0JOU6atUA",
  authDomain: "contactbooks-c0301.firebaseapp.com",
  projectId: "contactbooks-c0301",
  storageBucket: "contactbooks-c0301.appspot.com",
  messagingSenderId: "103939166440",
  appId: "1:103939166440:web:91242d8e7b90fe203bb95d"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()

// collection references
const usersCollection = db.collection('users')

// export utils/refs
export {
  db,
  usersCollection,
}
