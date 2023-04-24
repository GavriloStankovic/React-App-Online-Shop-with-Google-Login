import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
 } from 'firebase/auth'
 import {
    getFirestore,
    doc,
    getDoc,
    setDoc
 } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDlhGFZMMAAcBdFVHhneHlFGP-KSuMbl_A",
  authDomain: "online-shop-3db4d.firebaseapp.com",
  projectId: "online-shop-3db4d",
  storageBucket: "online-shop-3db4d.appspot.com",
  messagingSenderId: "1099007338429",
  appId: "1:1099007338429:web:c43ac569aabba4116ad4d4"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
export const database = getFirestore();
export const crateUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(database, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
    

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        }
        catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}