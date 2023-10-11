
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
}from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc

} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAn6esx15fgJi49l3MfYpomBxfF0e1I7YU",
  authDomain: "clothingapp-a9e22.firebaseapp.com",
  projectId: "clothingapp-a9e22",
  storageBucket: "clothingapp-a9e22.appspot.com",
  messagingSenderId: "593031251307",
  appId: "1:593031251307:web:b376c8b12ef79ceb22f82e"
};


const firebaseApp = initializeApp(firebaseConfig);

const GoogleProvider = new GoogleAuthProvider();

GoogleProvider.setCustomParameters({
    prompt:'select_account'
})

export const auth =getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, GoogleProvider)

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInformation) =>{
    const userDocRef = doc(db, 'users', userAuth.uid)
    // console.log(userDocRef)
    const userSnapshot = await getDoc(userDocRef)
    // console.log(userSnapshot)

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();


        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error){
            console.log('error message', error.message )
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await  signInWithEmailAndPassword(auth,email,password)
}

export const signOutUser = () => signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)

