import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDafxjJa_CkqZCj1_FReUA6Grng2PgBwng",
  authDomain: "crown-clothing-5901c.firebaseapp.com",
  projectId: "crown-clothing-5901c",
  storageBucket: "crown-clothing-5901c.appspot.com",
  messagingSenderId: "592359022299",
  appId: "1:592359022299:web:46576c130c0378eea536fe",
  measurementId: "G-FVCDGCZTER"    
  };

  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });


  export const auth = getAuth();
  export const googleSignIn = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  } 


  
  // export const googleSignIn =  signInWithPopup(auth, provider);
  export const firestore = getFirestore();