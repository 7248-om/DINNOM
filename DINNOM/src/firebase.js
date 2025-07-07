import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHu0feYAbugS4O5u37of5BGswivQEpyFU",
  authDomain: "dinnom-55b35.firebaseapp.com",
  projectId: "dinnom-55b35",
  storageBucket: "dinnom-55b35.firebasestorage.app",
  messagingSenderId: "473999606486",
  appId: "1:473999606486:web:3fb3b8a811de36b8813f77"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };