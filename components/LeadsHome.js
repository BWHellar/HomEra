import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import {
  Button,
} from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

const LeadsHome = ({ navigation }) => {
  const [leads, setLeads] = useState([
    {
      fullName: "John Doe",
      contactInformation: {
        phoneNumber: "1234567890",
        email: "johndoe@example.com",
      },
      desiredMoveInDate: "2022-01-01",
      budget: 1000,
      rentalHistory: "No rental history",
      employmentInformation: {
        employmentStatus: "Employed",
        employerDetails: "ABC Company",
        incomeVerification: "Pay stub",
      },
      numberOfOccupants: 2,
      petInformation: {
        hasPets: true,
        petType: "Dog",
        petSize: "Medium",
      },
      desiredPropertyType: "Apartment",
      preferredLocation: "City",
      amenities: ["Gym", "Swimming pool"],
      additionalComments: "No additional comments",
    },
    {
      fullName: "Jane Smith",
      contactInformation: {
        phoneNumber: "9876543210",
        email: "janesmith@example.com",
      },
      desiredMoveInDate: "2022-02-15",
      budget: 1500,
      rentalHistory: "Previous rental experience",
      employmentInformation: {
        employmentStatus: "Self-employed",
        employerDetails: "XYZ Business",
        incomeVerification: "Bank statements",
      },
      numberOfOccupants: 3,
      petInformation: {
        hasPets: true,
        petType: "Cat",
        petSize: "Small",
      },
      desiredPropertyType: "House",
      preferredLocation: "Suburbs",
      amenities: ["Backyard", "Parking"],
      additionalComments: "Looking for a pet-friendly place",
    },
  ]);

  const renderItem = ({ item }) => (
    <TouchableWithoutFeedback onPress={() => navigation.navigate("Lead Info")}>
      <View style={styles.card}>
        <Text>{item.fullName}</Text>
        <Text>
          {" "}
          <Icon name="envelope" size={14} color="#000" />{" "}
          {item.contactInformation.email} |{" "}
          <Icon name="phone" size={14} color="#000" />{" "}
          {item.contactInformation.phoneNumber}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <ImageBackground
      source={require("../images/gradient.png")}
      style={styles.background}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <View style={styles.analyticsContainer}>
              <View style={styles.analyticsBox}>
                <Text style={styles.analyticsLabelText}>New</Text>
                <Text style={styles.analyticsNumberText}>
                  {Math.floor(Math.random() * 100)}
                </Text>
              </View>
              <View style={styles.analyticsBox}>
                <Text style={styles.analyticsLabelText}>Existing</Text>
                <Text style={styles.analyticsNumberText}>
                  {Math.floor(Math.random() * 100)}
                </Text>
              </View>
              <View style={styles.analyticsBox}>
                <Text style={styles.analyticsLabelText}>Waiting</Text>
                <Text style={styles.analyticsNumberText}>
                  {Math.floor(Math.random() * 100)}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              compact
              mode="outlined"
              style={[styles.button, { marginTop: 30 }]}
              onPress={() => navigation.navigate("Lead Add")}
              color="#A875FF"
            >
              Add
            </Button>
          </View>
        </View>
        <FlatList
          data={leads}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  titleContainer: {
    flex: 1,
  },
  analyticsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  analyticsBox: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#A875FF",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    width: 80,
    height: 50,
  },
  analyticsLabelText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
  },
  analyticsNumberText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
  },
  scrollContainer: {
    borderWidth: 1,
    borderColor: "black",
  },
  title: {
    fontSize: 14,
  },
  boldText: {
    fontWeight: "bold",
  },
  buttonContainer: {
    marginLeft: 10,
    paddingBottom: 20,
  },
  button: {
    width: 80,
  },
  card: {
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    width: "80%",
    height: "75%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});
export default LeadsHome;
