import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
 } from 'firebase/auth'


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