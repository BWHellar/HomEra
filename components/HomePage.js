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
const HomePage = ({ navigation, route }) => {
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
