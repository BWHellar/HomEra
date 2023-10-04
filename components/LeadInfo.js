import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { TextInput, Button, Modal } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

const LeadInfo = ({ navigation }) => {
  const [lead, setLead] = useState({
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
  });
  const [notes, setNotes] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleCompleteTask = () => {
    console.log("Task marked as complete!");
    navigation.navigate("Leads");
  };
  const handleSubmit = () => {
    setModalVisible(false);
  };
  return (
    <>
      <ImageBackground
        source={require("../images/gradient.png")}
        style={styles.background}
      >
        <View style={styles.container}>
          <View style={styles.containerScroll}>
            <View style={styles.header}>
              <View style={styles.titleContainer}>
                <View style={styles.analyticsContainer}>
                  <View style={styles.analyticsBox}>
                    <Text style={styles.analyticsLabelText}>
                      Rental History
                    </Text>
                    <Icon
                      name={"times"}
                      size={16}
                      color={"red"}
                      style={styles.iconCheck}
                    />
                  </View>
                  <View style={styles.analyticsBox}>
                    <Text style={styles.analyticsLabelText}>
                      Employ History
                    </Text>
                    <Icon
                      name={"check"}
                      size={16}
                      color={"green"}
                      style={styles.iconCheck}
                    />
                  </View>
                  <View style={styles.analyticsBox}>
                    <Text style={styles.analyticsLabelText}>Within Budget</Text>
                    <Icon
                      name={"check"}
                      size={16}
                      color={"green"}
                      style={styles.iconCheck}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  compact
                  mode="outlined"
                  style={[styles.button, { marginTop: 30, width: 80 }]}
                  onPress={() => setModalVisible(true)}
                  color="#A875FF"
                >
                  Mark
                </Button>
              </View>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              <Text style={styles.label}>Full Name:</Text>
              <Text style={styles.text}>{lead?.fullName}</Text>

              <Text style={styles.label}>Contact Phone:</Text>
              <Text style={styles.text}>{lead?.contactInformation?.phoneNumber}</Text>

              <Text style={styles.label}>Contact Email:</Text>
              <Text style={styles.text}>{lead?.contactInformation?.email}</Text>

              <Text style={styles.label}>Desired Move In:</Text>
              <Text style={styles.text}>{lead?.desiredMoveInDate}</Text>

              <Text style={styles.label}>Budget:</Text>
              <Text style={styles.text}>{lead?.budget}</Text>

              <Text style={styles.label}>Rental History:</Text>
              <Text style={styles.text}>{lead?.rentalHistory}</Text>
              <Text style={styles.label}>Employment Status:</Text>
              <Text style={styles.text}>{lead?.employmentInformation?.employmentStatus}</Text>
              <Text style={styles.label}>Employer Details:</Text>
              <Text style={styles.text}>{lead?.employmentInformation?.employerDetails}</Text>

              <Text style={styles.label}>Income Verification:</Text>
              <Text style={styles.text}>{lead?.employmentInformation?.incomeVerification}</Text>
              <Text style={styles.label}>Number of Occupants:</Text>
              <Text style={styles.text}>{lead?.numberOfOccupants}</Text>
              <Text style={styles.label}>Pets:</Text>
              <Text style={styles.text}>{lead?.petInformation?.hasPets ? "Yes" : "No"}</Text>

              <Text style={styles.label}>Pet Type:</Text>
              <Text style={styles.text}>{lead?.petInformation?.petType}</Text>
              <Text style={styles.label}>Pet Size:</Text>
              <Text style={styles.text}>{lead?.petInformation?.petSize}</Text>
              <Text style={styles.label}>Property Type:</Text>
              <Text style={styles.text}>{lead?.desiredPropertyType}</Text>

              <Text style={styles.label}>Property Location:</Text>
              <Text style={styles.text}>{lead?.preferredLocation}</Text>
              <Text style={styles.label}>Desired Amenities:</Text>
              <Text style={styles.text}>{lead?.amenities.join(", ")}</Text>
              <Text style={styles.label}>Additional Comments:</Text>
              <Text style={styles.text}>{lead?.additionalComments}</Text>
              <Text style={styles.label}>Internal Comments:</Text>
              <Text style={styles.text}>{notes}</Text>

            </ScrollView>
          </View>
          <Button
            compact
            mode="outlined"
            style={[styles.button, { marginTop: 20 }]}
            onPress={handleCompleteTask}
          >
            Start Application Process
          </Button>
        </View>
        <Modal visible={modalVisible} onDismiss={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <TextInput
              multiline
              numberOfLines={7}
              label="Enter internal notes"
              value={notes}
              onChangeText={setNotes}
              style={styles.textInput}
            />
            <Button
              mode="contained"
              onPress={handleSubmit}
              style={styles.submitButton}
            >
              Submit
            </Button>
          </View>
        </Modal>
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
  titleContainer: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  detailsColumn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginLeft: 10,
    paddingBottom: 20,
  },
  analyticsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalContainer: {
    padding: 16,
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    width: "80%",
    maxHeight: "80%",
  },
  textInput: {
    height: 140,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  submitButton: {
    marginTop: 8,
    alignSelf: "flex-end",
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

  title: {
    marginBottom: 5,
  },
  containerScroll: {
    maxHeight: "90%",
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: "#F5F5F5",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default LeadInfo;
