import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import DropDown from "react-native-paper-dropdown";
import { apiKey } from '../secrets';
const PropertiesAdd = ({ navigation, route }) => {
  const [locationsDataArray, setLocationsDataArray] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({});

  useEffect(() => {
    getMyProperties();
  }, []);

  const getMyProperties = async () => {
    console.log(apiKey)
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
      onPress: () => navigation.navigate("Accounting"),
    },
    {
      name: "Marketing",
      image: require("../images/AddMarketing.png"),
      onPress: () => navigation.navigate("Applications"),
    },
    {
      name: "Documents",
      image: require("../images/AddDocument.png"),
      onPress: () => navigation.navigate("Messages"),
    },
    {
      name: "Property",
      image: require("../images/AddProperty.png"),
      onPress: () => navigation.navigate("Leads"),
    },
    {
      name: "Company",
      image: require("../images/AddCompany.png"),
      onPress: () => navigation.navigate("Loyalty"),
    },
    {
      name: "Financial",
      image: require("../images/AddFinancial.png"),
      onPress: () => navigation.navigate("Maintenance"),
    },
    {
      name: "Staff",
      image: require("../images/AddStaff.png"),
      onPress: () => navigation.navigate("Leads"),
    },
    {
      name: "Maintenance",
      image: require("../images/AddMaintenance.png"),
      onPress: () => navigation.navigate("Loyalty"),
    },
    {
      name: "Other",
      image: require("../images/AddOther.png"),
      onPress: () => navigation.navigate("Maintenance"),
    },
 
  ];
  const [showDropDown, setShowDropDown] = React.useState(false);

  return (
    <ImageBackground
      source={require("../images/gradient.png")}
      style={styles.background}
    >
      <View style={styles.dropdownContainer}>
        <DropDown
          mode={"outlined"}
          visible={showDropDown}
          value={selectedLocation} 
          showDropDown={() => setShowDropDown(true)}
          onDismiss={() => setShowDropDown(false)}
          list={locationsDataArray.map((item) => ({
            label: item.name,
            value: item,
          }))}
        />
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
          <Text style={styles.title}>New Properties</Text>
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

export default PropertiesAdd;
