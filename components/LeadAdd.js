import React, { useState } from "react";
import {
  ImageBackground,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  Button,
  Text,
  TextInput,
} from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
import { UNITLIST, MAINTENANCEITEMS } from "../constants";

const LeadAdd = ({ navigation }) => {
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

  return (
    <>
      <ImageBackground
        source={require("../images/gradient.png")}
        style={styles.background}
      >
        <View>
          <View style={styles.containerScroll}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
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
            </ScrollView>
          </View>
          <Button
            compact
            mode="outlined"
            style={[styles.button, { marginTop: 20 }]}
            // onPress={handleCompleteTask}
          >
            Add
          </Button>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 60,
  },
  title: {
    marginBottom: 5,
  },
  input: {
    marginBottom: 12,
  },
  scrollContainer: {
    flexGrow: 1,
    // paddingBottom: 20,
    padding: 16,
  },
  buttons: {
    marginTop: 90,
  },
  button: {
    color: "red",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  modalContent: {
    // backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
  },
  containerScroll: {
    maxHeight: "85%",
  },
});

export default LeadAdd;
