import React, { useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  HapticFeedback,
  TouchableOpacity,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ModalDropdown from "react-native-modal-dropdown";

const HomePage = ({ navigation }) => {
  const Stack = createNativeStackNavigator();
  const [selectedItem, setSelectedItem] = useState(null);
  const options = [
    "Apartment 1",
    "Apartment 2",
    "Apartment 3",
    "Apartment 4",
    "Apartment 5",
    "Apartment 6",
    "Apartment 7",
    "Apartment 8",
    "Apartment 9",
  ];

  const icons = [
    {
      name: "Accounting",
      image: require("../images/AccountingHome.png"),
      onPress: () => navigation.navigate("Accounting"),
    },
    {
      name: "Applications",
      image: require("../images/ApplicationHome.png"),
      onPress: () => navigation.navigate("Applications"),
    },
    {
      name: "Messages",
      image: require("../images/CommunicationHome.png"),
      onPress: () => navigation.navigate("Messages"),
    },
    {
      name: "Leads",
      image: require("../images/LeadsHome.png"),
      onPress: () => navigation.navigate("Leads"),
    },
    {
      name: "Loyalty",
      image: require("../images/LoyaltyHome.png"),
      onPress: () => navigation.navigate("Loyalty"),
    },
    {
      name: "Maintenance",
      image: require("../images/MaintenanceHome.png"),
      onPress: () => navigation.navigate("Maintenance"),
    },
    {
      name: "Properties",
      image: require("../images/PropertiesHome.png"),
      onPress: () => navigation.navigate("Properties"),
    },
    {
      name: "Residents",
      image: require("../images/ResidentsHome.png"),
      onPress: () => navigation.navigate("Residents"),
    },
    {
      name: "Schedule",
      image: require("../images/ScheduleHome.png"),
      onPress: () => navigation.navigate("Schedule"),
    },
    // Add more icons as needed
  ];

  return (
    <ImageBackground
      source={require("../images/gradient.png")}
      style={styles.background}
    >
      <View style={styles.dropdownContainer}>
        <ModalDropdown
          options={options}
          defaultValue={options[0]}
          onSelect={(index, value) => setSelectedItem(value)}
          style={styles.dropdown}
          textStyle={styles.dropdownText}
          dropdownStyle={styles.dropdownContainer}
          dropdownTextStyle={styles.dropdownItemText}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Home</Text>
        <View style={styles.iconContainer}>
          {icons.map((icon, index) => (
            <TouchableOpacity
              key={index}
              style={styles.icon}
              onPress={icon.onPress}
            >
              <Image source={icon.image} style={styles.iconImage} />
              <Text style={styles.iconText}>{icon.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start", // Change to "flex-start" to align items at the top
    marginTop: 70, // Increase the marginTop to create space for the dropdown
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  iconContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly", // evenly spaced icons horizontally
    alignItems: "flex-start", // align icons to the top of the container
    width: "100%",
    maxWidth: 400, // adjust the maximum width as needed
  },
  icon: {
    width: 100,
    height: 100,
    margin: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.5)", // add shadow color (black with 50% opacity)
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8, // add shadow opacity (80%)
    shadowRadius: 4, // add shadow radius
    elevation: 5, // for Android, add elevation to display shadow
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
    opacity: 0.9, // make the image slightly transparent (80% opacity)
  },
  iconText: {
    fontSize: 16,
  },
  dropdown: {
    width: "100%", // Change width to 100%
    borderWidth: 1,
    borderColor: "#00e6cf",
    borderRadius: 8,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#fff",
  },
  dropdownText: {
    fontSize: 16,
    color: "#333",
    paddingLeft:'39%',
    // paddingRight:'25%'
  },
  dropdownContainer: {
    width: "100%", // Change width to 100%
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  dropdownItemText: {
    fontSize: 16,
    color: "#333",
    padding: 10,
    textAlign: "center", // Add textAlign property

  },
});

export default HomePage;
