import React from "react";
import SignInPage from "./components/SignInPage";

export default function App() {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBSre-H4FbXm5YxyFNKAqLBO6w6dlEt37w",
    authDomain: "homera-29390.firebaseapp.com",
    projectId: "homera-29390",
    storageBucket: "homera-29390.appspot.com",
    messagingSenderId: "668234129560",
    appId: "1:668234129560:web:9179111d32308c46b070ed",
    measurementId: "G-EMY06VRLXE",
  };
  
  return <SignInPage />;
}
