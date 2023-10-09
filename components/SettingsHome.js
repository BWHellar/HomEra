import React from "react";
import { View } from "react-native";
import { Button, Portal, Text, Modal } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsHome = ({route}) => {
  
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button compact mode="outlined" onPress={() => AsyncStorage.removeItem("token")}>
        Test Logout
      </Button>
    </View>
  );
};

export default SettingsHome;
