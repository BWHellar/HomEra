import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ModalDropdown from "react-native-modal-dropdown";
import DropDown from "react-native-paper-dropdown";
import AsyncStorage from "@react-native-async-storage/async-storage";


import { LOCATIONAPI, getDataFromAsyncStorage } from "../constants";
import { configureGraphQL } from "./requiredfiles/apollo";
import { personGql, primaryLocations } from "../graphql/person";

const HomePage = ({ navigation, route }) => {
  // console.log(route);
  const [locationsDataArray, setLocationsDataArray] = useState([]);
  const [userData, setUserData] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    getMyProperties();
  }, []);

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
  ];
  const [showDropDown, setShowDropDown] = React.useState(false);

  const getMyProperties = async () => {
    const location = configureGraphQL(LOCATIONAPI);
    try {
      await location
        .query({
          query: primaryLocations,
          variables: {
            status: "publish",
          },
        })
        .then((res) => {
          let locations = res.data.locations.edges;
          let arrayLoc = locations.map((location, index) => ({
            // key: "location.node" + index + 1,
            label: location.node.customId,
            value: location.node.id,
          }));
          AsyncStorage.setItem("selectedLocation", arrayLoc[0].value);
          setLocationsDataArray(arrayLoc);
        });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    const setInitialValue = async () => {
      try {
        const value = await AsyncStorage.getItem("selectedLocation");
        if (value !== null) {
          // Value exists in AsyncStorage
          setSelectedLocation(value);
        } else if (locationsDataArray.length > 0) {
          // No value in AsyncStorage, but locationsDataArray is not empty
          setSelectedLocation(locationsDataArray[0]);
        }
      } catch (error) {
        // Error retrieving data
        console.log(error);
      }
    };
  
    setInitialValue();
  }, []);

  return (
    <ImageBackground
      source={require("../images/gradient.png")}
      style={styles.background}
    >
      <View style={styles.dropdownContainer}>
      {/* <Button title="Retrieve Selected Location" onPress={retrieveSelectedLocation} /> */}
        <DropDown
          // label={selectedLocation}
          mode={"outlined"}
          visible={showDropDown}
          value={selectedLocation} // Set the current selected value
          showDropDown={() => setShowDropDown(true)}
          onDismiss={() => setShowDropDown(false)}
          setValue={(selectedValue) => {
            setSelectedLocation(selectedValue);
            AsyncStorage.setItem("selectedLocation", selectedValue); // Save the selected value to AsyncStorage
          }}
          list={locationsDataArray}
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
    justifyContent: "flex-start",
    marginTop: 70,
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
  dropdown: {
    width: "100%",
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
    paddingLeft: "39%",
  },
  dropdownContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  dropdownItemText: {
    fontSize: 16,
    color: "#333",
    padding: 10,
    textAlign: "center",
  },
});

export default HomePage;
