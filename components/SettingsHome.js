import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsHome = ({route}) => {
  
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button compact mode="outlined" onPress={() => AsyncStorage.removeItem("TOKEN")}>
        Test Logout
      </Button>
    </View>
  );
};

export default SettingsHome;
