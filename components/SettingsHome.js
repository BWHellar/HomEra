import React from "react";
import { View } from "react-native";
import { Button, Portal, Text, Modal } from "react-native-paper";
import Cookie from "js-cookie";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const SettingsHome = ({route}) => {
  
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button compact mode="outlined" onPress={() => route.params.logoutAction()}>
        Test Logout
      </Button>
    </View>
  );
};

export default SettingsHome;
