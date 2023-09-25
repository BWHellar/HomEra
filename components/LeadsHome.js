import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import {
  TextInput,
  Modal,
  Portal,
  Button,
  Paragraph,
  SegmentedButtons,
} from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

const LeadsHome = () => {
  const [visible, setVisible] = useState(false);
  const [chosenData, setChosenData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
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
    const isFieldEmpty = (value) => value.trim() === "";

    const isFormValid = Object.values(formData).every((value) =>
      typeof value !== "object"
        ? !isFieldEmpty(value)
        : !Object.values(value).some(isFieldEmpty)
    );

    if (isFormValid && formData.amenities.length > 0) {
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
    } else {
      // Show an error message or handle the case where not all TextInputs are filled out
      // For example:
      alert("Please fill out all fields before submitting!");
    }
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
  const handleSegmentedButtonChange = (value) => {
    if (value === "cancel") {
      setModalVisible(false);
    } else if (value === "submit") {
      handleSubmit();
    }
  };
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 100);
  };

  const getRandomColor = () => {
    const colors = ["red", "blue", "green", "yellow", "orange"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

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
                  {getRandomNumber()}
                </Text>
              </View>
              <View style={styles.analyticsBox}>
                <Text style={styles.analyticsLabelText}>Existing</Text>
                <Text style={styles.analyticsNumberText}>
                  {getRandomNumber()}
                </Text>
              </View>
              <View style={styles.analyticsBox}>
                <Text style={styles.analyticsLabelText}>Waiting</Text>
                <Text style={styles.analyticsNumberText}>
                  {getRandomNumber()}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
          <Button
    compact
    mode="outlined"
    style={[styles.button, { marginTop: 30 }]}
    onPress={() => setModalVisible(true)}
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
                  mode="outlined"
                  value={formData.fullName}
                  onChangeText={(text) => handleInputChange("fullName", text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Phone Number"
                  mode="outlined"
                  value={formData.contactInformation.phoneNumber}
                  onChangeText={(text) =>
                    handleInputChange("contactInformation.phoneNumber", text)
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  mode="outlined"
                  value={formData.contactInformation.email}
                  onChangeText={(text) =>
                    handleInputChange("contactInformation.email", text)
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Desired Move-in Date"
                  value={formData.desiredMoveInDate}
                  mode="outlined"
                  onChangeText={(text) =>
                    handleInputChange("desiredMoveInDate", text)
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Budget"
                  value={formData.budget.toString()}
                  mode="outlined"
                  onChangeText={(text) =>
                    handleInputChange("budget", parseInt(text))
                  }
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Rental History"
                  mode="outlined"
                  value={formData.rentalHistory}
                  onChangeText={(text) =>
                    handleInputChange("rentalHistory", text)
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Employment Status"
                  value={formData.employmentInformation.employmentStatus}
                  mode="outlined"
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
                  mode="outlined"
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
                  mode="outlined"
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
                  mode="outlined"
                  onChangeText={(text) =>
                    handleInputChange("numberOfOccupants", parseInt(text))
                  }
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Pet Type"
                  value={formData.petInformation.petType}
                  mode="outlined"
                  onChangeText={(text) =>
                    handleInputChange("petInformation.petType", text)
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Pet Size"
                  value={formData.petInformation.petSize}
                  mode="outlined"
                  onChangeText={(text) =>
                    handleInputChange("petInformation.petSize", text)
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Desired Property Type"
                  value={formData.desiredPropertyType}
                  mode="outlined"
                  onChangeText={(text) =>
                    handleInputChange("desiredPropertyType", text)
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Preferred Location"
                  value={formData.preferredLocation}
                  mode="outlined"
                  onChangeText={(text) =>
                    handleInputChange("preferredLocation", text)
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Amenities"
                  value={formData.amenities.join(", ")}
                  mode="outlined"
                  onChangeText={(text) =>
                    handleInputChange("amenities", text.split(","))
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Additional Comments"
                  value={formData.additionalComments}
                  mode="outlined"
                  onChangeText={(text) =>
                    handleInputChange("additionalComments", text)
                  }
                />
              </View>
            </ScrollView>
            <SegmentedButtons
              onValueChange={handleSegmentedButtonChange}
              buttons={[
                {
                  value: "cancel",
                  label: "Cancel",
                  icon: "",
                },
                {
                  value: "submit",
                  label: "Submit",
                  icon: "check",
                },
              ]}
            />
          </Modal>
        </Portal>
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
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  analyticsBox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#A875FF",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    width: 80, // Adjust the width of the boxes as desired
    height: 50, // Adjust the height of the boxes as desired
  },
  analyticsLabelText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  analyticsNumberText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
  },
  scrollContainer: {
    // flexGrow: 1,
    borderWidth: 1,
    borderColor: "black",
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
    paddingBottom:20
  },
  button: {
    width:80,
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
