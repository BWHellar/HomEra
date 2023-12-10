import React from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
} from "react-native";

const SetProperty = ({ navigation }) => {
 
  return (
    <>
      <ImageBackground
        source={require("../images/gradient.png")}
        style={styles.background}
      >
        <View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 60,
  },
  
});

export default SetProperty;