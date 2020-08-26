import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD_r6NuXhDG7FSgXHeISBvvd97MVx-VtUo",
    authDomain: "crown-db-87044.firebaseapp.com",
    databaseURL: "https://crown-db-87044.firebaseio.com",
    projectId: "crown-db-87044",
    storageBucket: "crown-db-87044.appspot.com",
    messagingSenderId: "691818916172",
    appId: "1:691818916172:web:732b477ffdd32d726687e9",
    measurementId: "G-1MG4LWLTGJ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()
    
    if (!snapShot.exists) {
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try {
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
        
    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
// provider.setCustomParameters({ prompt: 'select-account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase