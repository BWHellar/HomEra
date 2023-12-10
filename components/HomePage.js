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
import { Surface, List, TouchableRipple } from "react-native-paper";
import { apiKey } from "../secrets";
import moment from "moment";
import { THENEWSFEED } from "../constants";

const HomePage = ({ navigation, route }) => {
  const [locationsDataArray, setLocationsDataArray] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({});

  const [date, setDate] = useState(moment());

  const handleLeftArrowClick = () => {
    setDate(date.clone().subtract(1, "day"));
  };

  const handleRightArrowClick = () => {
    setDate(date.clone().add(1, "day"));
  };

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

        <Surface style={styles.surface} elevation={4}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity onPress={handleLeftArrowClick}>
              <List.Icon icon="arrow-left" />
            </TouchableOpacity>
            <Text style={styles.subtitle}>{date.format("MMMM Do YYYY")}</Text>
            <TouchableOpacity onPress={handleRightArrowClick}>
              <List.Icon icon="arrow-right" />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.surfaceScroll}>
            {THENEWSFEED.map((item, index) => (
              <TouchableRipple
                onPress={() => navigation.navigate(item.routing)}
                style={styles.surfaceScroll}
              >
              <List.Item
  key={index}
  title={item.title}
  description={item.description}
  left={(props) => <List.Icon {...props} icon={item.image} />}
  right={() => (
    <>
      <List.Subheader>{item.date}</List.Subheader>
      <List.Icon icon="clock" />
    </>
  )}
  style={{
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    marginBottom: 12,
  }}
  titleStyle={{ color: "#6C63FF" }}
  descriptionStyle={{ fontSize: 14 }}
  rightStyle={{ alignSelf: 'center', marginRight: 8 }}
/>
              </TouchableRipple>
            ))}
          </ScrollView>
        </Surface>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
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
  surface: {
    padding: 8,
    height: 240,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "auto",
  },
  surfaceScroll: {
    backgroundColor: "white",
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
