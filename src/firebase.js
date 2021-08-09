import  firebase from 'firebase'
import 'firebase/firestore'

// firebase init
const firebaseConfig = {
  apiKey: "AIzaSyBbFHZIEyAF6reEpZbEKufdJ2Ocu3Hletw",
  authDomain: "contactdb-ca713.firebaseapp.com",
  projectId: "contactdb-ca713",
  storageBucket: "contactdb-ca713.appspot.com",
  messagingSenderId: "678932622300",
  appId: "1:678932622300:web:df1d841da87f6f65d4fd19"
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
