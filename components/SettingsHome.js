import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";


const SettingsHome = ({route}) => {
  
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button compact mode="outlined" >
        Test Logout
      </Button>
    </View>
  );
};

export default SettingsHome;
