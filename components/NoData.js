import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const NoData = () => {
  return (
    <View style={styles.container}>
      <Icon name="database-alert" size={48} color="#6c64fb"  />
      <Text style={styles.text}>No Data...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 16,
    fontSize: 16,
  },
});

export default NoData;
