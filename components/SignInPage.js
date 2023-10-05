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
import { HelperText } from "react-native-paper";

export default function SignInPage({ route }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [failedEmail, setFailedEmail] = useState(false);
  const [failedPassword, setFailedPassword] = useState(false);
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

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const loginPress = async () => {
    try {
      const result = await route.params.loginAction(username, password);
      console.log(result);
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        setFailedPassword(true)
        setFailedEmail(false)
      } else if (error.code === "auth/invalid-email") {
        setFailedEmail(true)
        setFailedPassword(false)
      } else {
        console.log(error);
      }
    }
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
            <HelperText type="error" visible={failedEmail}>
              Please check email!
            </HelperText>
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
            <HelperText type="error" visible={failedPassword}>
              Please check password!
            </HelperText>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => loginPress()}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
