import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const BottomNavigation = () => {
  const navigation = useNavigation();
  const goToSettings = () => {
    navigation.navigate("Settings");
  };
  const goToHome = () => {
    navigation.navigate("Home");
  };
  const goToProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToSettings}>
        <Icon name="gear" size={24} color="#333" style={styles.navItem} />
      </TouchableOpacity>
      <TouchableOpacity onPress={goToHome}>
        <Icon name="home" size={24} color="#333" style={styles.navItem} />
      </TouchableOpacity>
      <TouchableOpacity onPress={goToProfile}>
        <Icon name="user" size={24} color="#333" style={styles.navItem} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingVertical: 10,
  },
  navItem: {
    paddingHorizontal: 10,
  },
});

export default BottomNavigation;
