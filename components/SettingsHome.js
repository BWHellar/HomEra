import React from "react";
import { View } from "react-native";
import { Button, Portal, Text, Modal } from "react-native-paper";
import Cookie from "js-cookie";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const SettingsHome = () => {
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
  const LogoutFunction = () => {
    console.log("test")
    auth.signOut();
    Cookie.remove(TOKEN, {
      domain: config.domain,
    });
    Cookie.remove(EXPIRE_TIME, {
      domain: config.domain,
    });
    Cookie.remove(MANAGER, {
      domain: config.domain,
    });

  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button compact mode="outlined" onPress={() => LogoutFunction()}>
        Test Logout
      </Button>
    </View>
  );
};

export default SettingsHome;
