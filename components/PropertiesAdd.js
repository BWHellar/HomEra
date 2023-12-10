import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import DropDown from "react-native-paper-dropdown";
import { Surface, List, Button} from "react-native-paper";

import { apiKey } from "../secrets";
const PropertiesAdd = ({ navigation, route }) => {
  const { address } = route.params;
  const [locationsDataArray, setLocationsDataArray] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({});

  useEffect(() => {
    getMyProperties();
  }, []);

  const getMyProperties = async () => {
    console.log(apiKey);
    fetch(`http://${apiKey}:3000/properties`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSelectedLocation(data[0]);
        setLocationsDataArray(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const icons = [
    {
      name: "Units",
      image: require("../images/AddUnits.png"),
      onPress: () => navigation.navigate("Set Units"),
    },
    {
      name: "Marketing",
      image: require("../images/AddMarketing.png"),
      onPress: () => navigation.navigate("Set Marketing"),
    },
    {
      name: "Documents",
      image: require("../images/AddDocument.png"),
      onPress: () => navigation.navigate("Set Documents"),
    },
    {
      name: "Property",
      image: require("../images/AddProperty.png"),
      onPress: () => navigation.navigate("Set Property"),
    },
    {
      name: "Company",
      image: require("../images/AddCompany.png"),
      onPress: () => navigation.navigate("Set Company"),
    },
    {
      name: "Financial",
      image: require("../images/AddFinancial.png"),
      onPress: () => navigation.navigate("Set Financial"),
    },
    {
      name: "Staff",
      image: require("../images/AddStaff.png"),
      onPress: () => navigation.navigate("Set Staff"),
    },
    {
      name: "Maintenance",
      image: require("../images/AddMaintenance.png"),
      onPress: () => navigation.navigate("Set Maintenance"),
    },
    {
      name: "Other",
      image: require("../images/AddOther.png"),
      onPress: () => navigation.navigate("Set Other"),
    },
  ];
  const [showDropDown, setShowDropDown] = React.useState(false);

  return (
    <ImageBackground
      source={require("../images/gradient.png")}
      style={styles.background}
    >
      <View style={styles.dropdownContainer}>
        <Text style={styles.title}>{address}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>New Properties</Text>
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
        <Surface style={styles.surface} elevation={4}>
          <View>
            <Text style={styles.subtitle}>Tips</Text>
          </View>
          <ScrollView>
            <List.Item
              title="Research the Market"
              description="Understand the demand, rental rates, and competition in the area."
              left={(props) => (
                <List.Icon {...props} icon="alert-octagram-outline" />
              )}
            />
            <List.Item
              title="High-Quality Photos"
              description="Capture appealing images to showcase the property's best features."
              left={(props) => (
                <List.Icon {...props} icon="alert-octagram-outline" />
              )}
            />
            <List.Item
              title="Detailed Property Description"
              description="Provide accurate and comprehensive information about the property."
              left={(props) => (
                <List.Icon {...props} icon="alert-octagram-outline" />
              )}
            />
            <List.Item
              title="Set Competitive Rental Price"
              description="Ensure the rental price is attractive compared to similar properties in the area."
              left={(props) => (
                <List.Icon {...props} icon="alert-octagram-outline" />
              )}
            />
          </ScrollView>
        </Surface>
        <Button style={[styles.button, { marginTop: 10 }]} mode="outlined">Publish Property</Button>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  button:{
    width:"90%"
  },
  surface: {
    padding: 8,
    height: 230,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "auto",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "center",
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
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    width: "100%",
    maxWidth: 400,
  },
  icon: {
    width: 100,
    height: 100,
    margin: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
    opacity: 0.9,
  },
  iconText: {
    fontSize: 16,
  },
  dropdownContainer: {
    width: "100%",
    borderWidth: 1,
    height: 48, // Set the desired height
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default PropertiesAdd;
