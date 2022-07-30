import { initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDpVDItndlDj1WJKY-kFtBeYjwQvpJVwc8",
    authDomain: "crwn-clothing-db-e88ab.firebaseapp.com",
    projectId: "crwn-clothing-db-e88ab",
    storageBucket: "crwn-clothing-db-e88ab.appspot.com",
    messagingSenderId: "157592515699",
    appId: "1:157592515699:web:d80ff5a57c79f85d122606"
  };

  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);