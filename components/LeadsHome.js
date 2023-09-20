import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableWithoutFeedback, ScrollView
} from "react-native";
import { Modal, Portal, Paragraph } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

const LeadsHome = () => {
  const [visible, setVisible] = useState(false);
  const [chosenData, setChosenData] = useState({});
  const data = [
    {
      fullName: "John Doe",
      contactInformation: {
        phoneNumber: "123-456-7890",
        email: "johndoe@example.com",
      },
      desiredMoveInDate: "2022-01-01",
      budget: 1500,
      rentalHistory: "Previous rental history available upon request",
      employmentInformation: {
        employmentStatus: "Full-time",
        employerDetails: "ABC Company",
        incomeVerification: "Pay stubs",
      },
      numberOfOccupants: 2,
      petInformation: {
        hasPets: true,
        petType: "Dog",
        petSize: "Medium",
      },
      desiredPropertyType: "Apartment",
      preferredLocation: "City X",
      amenities: ["Parking", "Laundry facilities"],
      additionalComments: "Looking for a quiet neighborhood",
    },
  ];
  const showModal = (item) => {
    setChosenData(item);
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableWithoutFeedback onPress={() => showModal(item)}>
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
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Leads</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button color="#00e6cf" title="Add" onPress={() => {}} />
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modalContainer}
        >
          <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Paragraph style={styles.title}>
            <Text style={styles.boldText}>Name:</Text> {"\n"}{" "}{chosenData?.fullName}
          </Paragraph>
          <Paragraph style={styles.title}>
            <Text style={styles.boldText}>Email:</Text>{"\n"}{" "}
            {chosenData?.contactInformation?.email}
          </Paragraph>
          <Paragraph style={styles.title}>
            <Text style={styles.boldText}>Phone:</Text>{"\n"}{" "}
            {chosenData?.contactInformation?.phoneNumber}
          </Paragraph>
          <Paragraph style={styles.title}>
            <Text style={styles.boldText}>Desired Move-In Date:</Text>{"\n"}{" "}
            {chosenData?.desiredMoveInDate}
          </Paragraph>
          <Paragraph style={styles.title}>
            <Text style={styles.boldText}>Budget:</Text>{"\n"}{" "} {chosenData?.budget}
          </Paragraph>
          <Paragraph style={styles.title}>
            <Text style={styles.boldText}>Rental History:</Text>{"\n"}{" "}
            {chosenData?.rentalHistory}
          </Paragraph>
          <Paragraph style={styles.title}>
            <Text style={styles.boldText}>Employment Status:</Text>{"\n"}{" "}
            {chosenData?.employmentInformation?.employmentStatus}
          </Paragraph>
          <Paragraph style={styles.title}>
            <Text style={styles.boldText}>Employer Details:</Text>{"\n"}{" "}
            {chosenData?.employmentInformation?.employerDetails}
          </Paragraph>
          <Paragraph style={styles.title}>
            <Text style={styles.boldText}>Income Verification:</Text>{"\n"}{" "}
            {chosenData?.employmentInformation?.incomeVerification}
          </Paragraph>
          <Paragraph style={styles.title}>
            <Text style={styles.boldText}>Number of Occupants:</Text>{"\n"}{" "}
            {chosenData?.numberOfOccupants}
          </Paragraph>
          <Paragraph style={styles.title}>
            <Text style={styles.boldText}>Has Pets:</Text>{"\n"}{" "}
            {chosenData?.petInformation?.hasPets ? "Yes" : "No"}
          </Paragraph>
          <Paragraph style={styles.title}>
            <Text style={styles.boldText}>Pet Type:</Text>{"\n"}{" "}
            {chosenData?.petInformation?.petType}
          </Paragraph>
          <Paragraph style={styles.title}>
            <Text style={styles.boldText}>Pet Size:</Text>{"\n"}{" "}
            {chosenData?.petInformation?.petSize}
          </Paragraph>
          <Paragraph style={styles.title}>
            <Text style={styles.boldText}>Desired Property Type:</Text>{"\n"}{" "}
            {chosenData?.desiredPropertyType}
          </Paragraph>
          <Paragraph style={styles.title}>
            <Text style={styles.boldText}>Preferred Location:</Text>{"\n"}{" "}
            {chosenData?.preferredLocation}
          </Paragraph>
          <Paragraph style={styles.title}>
            <Text style={styles.boldText}>Amenities:</Text>{"\n"}{" "}
            {chosenData?.amenities}
          </Paragraph>
          <Paragraph style={styles.title}>
            <Text style={styles.boldText}>Additional Comments:</Text>{"\n"}{" "}
            {chosenData?.additionalComments}
          </Paragraph>
          </ScrollView>
          {/* <Button title="Close" onPress={hideModal} /> */}
        </Modal>
      </Portal>
    </View>
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
  titleContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  title: {
    fontSize: 14,
    // fontWeight: "bold",
  },
  boldText: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginLeft: 10,
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
    height:"75%",
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
