import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { TextInput, Modal, Portal, Paragraph } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

const LeadsHome = () => {
  const [visible, setVisible] = useState(false);
  const [chosenData, setChosenData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [leads, setLeads] = useState([
   
  ]);
  const [formData, setFormData] = useState({
    fullName: "",
    contactInformation: {
      phoneNumber: "",
      email: "",
    },
    desiredMoveInDate: "",
    budget: 0,
    rentalHistory: "",
    employmentInformation: {
      employmentStatus: "",
      employerDetails: "",
      incomeVerification: "",
    },
    numberOfOccupants: 0,
    petInformation: {
      hasPets: false,
      petType: "",
      petSize: "",
    },
    desiredPropertyType: "",
    preferredLocation: "",
    amenities: [],
    additionalComments: "",
  });

  const handleSubmit = () => {
    // Handle form submission
    setLeads((prevLeads) => [...prevLeads, formData]);
    setFormData({
      fullName: "",
      contactInformation: {
        phoneNumber: "",
        email: "",
      },
      desiredMoveInDate: "",
      budget: "",
      rentalHistory: "",
      employmentInformation: {
        employmentStatus: "",
        employerDetails: "",
        incomeVerification: "",
      },
      numberOfOccupants: "",
      petInformation: {
        hasPets: false,
        petType: "",
        petSize: "",
      },
      desiredPropertyType: "",
      preferredLocation: "",
      amenities: [],
      additionalComments: "",
    });
    setModalVisible(false);
  };
  const showModal = (item) => {
    setChosenData(item);
    setVisible(true);
  };
  const handleInputChange = (key, value) => {
  const keys = key.split(".");
  setFormData((prevFormData) => {
    let updatedFormData = { ...prevFormData };
    let nestedObject = updatedFormData;
    for (let i = 0; i < keys.length - 1; i++) {
      nestedObject = nestedObject[keys[i]];
    }
    nestedObject[keys[keys.length - 1]] = value;
    return updatedFormData;
  });
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
          <Button
            color="#00e6cf"
            title="Add"
            onPress={() => setModalVisible(true)}
          />
        </View>
      </View>
      <FlatList
        data={leads}
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
              <Text style={styles.boldText}>Name:</Text> {"\n"}{" "}
              {chosenData?.fullName}
            </Paragraph>
            <Paragraph style={styles.title}>
              <Text style={styles.boldText}>Email:</Text>
              {"\n"} {chosenData?.contactInformation?.email}
            </Paragraph>
            <Paragraph style={styles.title}>
              <Text style={styles.boldText}>Phone:</Text>
              {"\n"} {chosenData?.contactInformation?.phoneNumber}
            </Paragraph>
            <Paragraph style={styles.title}>
              <Text style={styles.boldText}>Desired Move-In Date:</Text>
              {"\n"} {chosenData?.desiredMoveInDate}
            </Paragraph>
            <Paragraph style={styles.title}>
              <Text style={styles.boldText}>Budget:</Text>
              {"\n"} {chosenData?.budget}
            </Paragraph>
            <Paragraph style={styles.title}>
              <Text style={styles.boldText}>Rental History:</Text>
              {"\n"} {chosenData?.rentalHistory}
            </Paragraph>
            <Paragraph style={styles.title}>
              <Text style={styles.boldText}>Employment Status:</Text>
              {"\n"} {chosenData?.employmentInformation?.employmentStatus}
            </Paragraph>
            <Paragraph style={styles.title}>
              <Text style={styles.boldText}>Employer Details:</Text>
              {"\n"} {chosenData?.employmentInformation?.employerDetails}
            </Paragraph>
            <Paragraph style={styles.title}>
              <Text style={styles.boldText}>Income Verification:</Text>
              {"\n"} {chosenData?.employmentInformation?.incomeVerification}
            </Paragraph>
            <Paragraph style={styles.title}>
              <Text style={styles.boldText}>Number of Occupants:</Text>
              {"\n"} {chosenData?.numberOfOccupants}
            </Paragraph>
            <Paragraph style={styles.title}>
              <Text style={styles.boldText}>Has Pets:</Text>
              {"\n"} {chosenData?.petInformation?.hasPets ? "Yes" : "No"}
            </Paragraph>
            <Paragraph style={styles.title}>
              <Text style={styles.boldText}>Pet Type:</Text>
              {"\n"} {chosenData?.petInformation?.petType}
            </Paragraph>
            <Paragraph style={styles.title}>
              <Text style={styles.boldText}>Pet Size:</Text>
              {"\n"} {chosenData?.petInformation?.petSize}
            </Paragraph>
            <Paragraph style={styles.title}>
              <Text style={styles.boldText}>Desired Property Type:</Text>
              {"\n"} {chosenData?.desiredPropertyType}
            </Paragraph>
            <Paragraph style={styles.title}>
              <Text style={styles.boldText}>Preferred Location:</Text>
              {"\n"} {chosenData?.preferredLocation}
            </Paragraph>
            <Paragraph style={styles.title}>
              <Text style={styles.boldText}>Amenities:</Text>
              {"\n"} {chosenData?.amenities}
            </Paragraph>
            <Paragraph style={styles.title}>
              <Text style={styles.boldText}>Additional Comments:</Text>
              {"\n"} {chosenData?.additionalComments}
            </Paragraph>
          </ScrollView>
        </Modal>
        <Modal
          contentContainerStyle={styles.modalContainer}
          visible={modalVisible}
          animationType="slide"
          transparent={true}
        >
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Add Lead</Text>
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                value={formData.fullName}
                onChangeText={(text) => handleInputChange("fullName", text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={formData.contactInformation.phoneNumber}
                onChangeText={(text) =>
                  handleInputChange("contactInformation.phoneNumber", text)
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={formData.contactInformation.email}
                onChangeText={(text) =>
                  handleInputChange("contactInformation.email", text)
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Desired Move-in Date"
                value={formData.desiredMoveInDate}
                onChangeText={(text) =>
                  handleInputChange("desiredMoveInDate", text)
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Budget"
                value={formData.budget.toString()}
                onChangeText={(text) =>
                  handleInputChange("budget", parseInt(text))
                }
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholder="Rental History"
                value={formData.rentalHistory}
                onChangeText={(text) =>
                  handleInputChange("rentalHistory", text)
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Employment Status"
                value={formData.employmentInformation.employmentStatus}
                onChangeText={(text) =>
                  handleInputChange(
                    "employmentInformation.employmentStatus",
                    text
                  )
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Employer Details"
                value={formData.employmentInformation.employerDetails}
                onChangeText={(text) =>
                  handleInputChange(
                    "employmentInformation.employerDetails",
                    text
                  )
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Income Verification"
                value={formData.employmentInformation.incomeVerification}
                onChangeText={(text) =>
                  handleInputChange(
                    "employmentInformation.incomeVerification",
                    text
                  )
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Number of Occupants"
                value={formData.numberOfOccupants.toString()}
                onChangeText={(text) =>
                  handleInputChange("numberOfOccupants", parseInt(text))
                }
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholder="Pet Type"
                value={formData.petInformation.petType}
                onChangeText={(text) =>
                  handleInputChange("petInformation.petType", text)
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Pet Size"
                value={formData.petInformation.petSize}
                onChangeText={(text) =>
                  handleInputChange("petInformation.petSize", text)
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Desired Property Type"
                value={formData.desiredPropertyType}
                onChangeText={(text) =>
                  handleInputChange("desiredPropertyType", text)
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Preferred Location"
                value={formData.preferredLocation}
                onChangeText={(text) =>
                  handleInputChange("preferredLocation", text)
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Amenities"
                value={formData.amenities.join(", ")}
                onChangeText={(text) =>
                  handleInputChange("amenities", text.split(","))
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Additional Comments"
                value={formData.additionalComments}
                onChangeText={(text) =>
                  handleInputChange("additionalComments", text)
                }
              />
            </View>
          </ScrollView>
          <Button title="Submit" onPress={handleSubmit} />
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
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
    fontWeight: "bold",
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
