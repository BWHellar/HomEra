import {
    signInWithEmailAndPassword,
    getIdTokenResult,
    getIdToken,
    getReactNativePersistence,
    getAuth,
    onAuthStateChanged,
  } from "firebase/auth";
  import { initializeApp } from "firebase/app";
import {config } from "./config";

const app = initializeApp(config);
const auth = getAuth(app);

export const handleLogin = ( email, password ) =>
  signInWithEmailAndPassword(auth, email, password)
    .then(async () => auth.currentUser)
    .catch((e) => {
      console.log("User e-mail id or password is incorrect.");
    });
export default { handleLogin};
