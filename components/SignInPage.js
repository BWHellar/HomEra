import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

import "firebase/auth";
import {
  signInWithEmailAndPassword,
  getIdTokenResult,
  getIdToken,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

export default function SignInPage({ route }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    background: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
    },
    contentContainer: {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      padding: 16,
      borderRadius: 8,
    },
    banner: {
      fontSize: 36,
      fontWeight: "bold",
      marginBottom: 32,
      color: "#333333",
      textAlign: "center",
    },
    bannerContainer: {
      position: "absolute",
      top: 50,
      right: 20,
    },
    bannerImage: {
      width: 70,
      height: 70,
      borderRadius: 15,
      resizeMode: "contain",
    },
    inputContainer: {
      marginBottom: 16,
    },
    inputLabel: {
      fontSize: 16,
      marginBottom: 8,
      color: "#333333",
    },
    input: {
      width: 300,
      height: 40,
      borderColor: "#333333",
      borderWidth: 1,
      paddingHorizontal: 10,
      borderRadius: 8,
    },

    button: {
      backgroundColor: "#00E6CF",
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
      marginTop: 16,
    },
    buttonText: {
      color: "#ffffff",
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
    },
  });
  const firebaseConfig = {
    apiKey: "AIzaSyDA1wcz3xYK8r-wUWmUj_HGmqlrzIMjgus",
    authDomain: "leasera-production.firebaseapp.com",
    databaseURL: "https://leasera-production.firebaseio.com",
    projectId: "leasera-production",
    storageBucket: "leasera-production.appspot.com",
    messagingSenderId: "913859279590",
    appId: "1:913859279590:web:11b02c03a5b7f109ecd927",
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const loginAction = () => {
    signInWithEmailAndPassword(auth, username, password)
      .then(async () => {
        console.log(auth.currentUser);
      })
      .catch((e) => {
        console.log(constAuth);
      });
  };

  return (
    <ImageBackground
      source={require("../images/LoginBackground.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.bannerContainer}>
          <Image
            source={require("../images/logo.png")}
            style={styles.bannerImage}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.banner}>Login</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your username"
              value={username}
              onChangeText={handleUsernameChange}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry={true}
              value={password}
              onChangeText={handlePasswordChange}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={() => loginAction()}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
