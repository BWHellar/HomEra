import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

const MaintenanceInfo = ({ navigation }) => {
  const [title, setTitle] = useState("This is the Title");
  const [description, setDescription] = useState(
    "Some random description that is provided by the renter or the PM at the time."
  );
  const [unit, setUnit] = useState("Unit 1");
  const [residentName, setResidentName] = useState("Bob Dole");
  const [phoneNumber, setPhoneNumber] = useState("123 456 7890");
  const [email, setEmail] = useState("someemail@example.com");
  const [submitted, setSubmitted] = useState("10/13/1989");

  const handleCompleteTask = () => {
    // Perform action to mark the task as complete
    // For example, make an API call or update state in your app
    console.log("Task marked as complete!");
    navigation.navigate("Maintenance");
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
                    <Text style={styles.analyticsLabelText}>Fire</Text>
                    <Icon
                      name={"times"}
                      size={16}
                      color={"red"}
                      style={styles.iconCheck}
                    />
                  </View>
                  <View style={styles.analyticsBox}>
                    <Text style={styles.analyticsLabelText}>Enter</Text>
                    <Icon
                      name={"check"}
                      size={16}
                      color={"green"}
                      style={styles.iconCheck}
                    />
                  </View>
                  <View style={styles.analyticsBox}>
                    <Text style={styles.analyticsLabelText}>Pet</Text>
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
                  onPress={() => navigation.navigate("Maintenance Add")}
                  color="#A875FF"
                >
                  Mark
                </Button>
              </View>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              <Text style={styles.label}>Title:</Text>
              <Text style={styles.text}>{title}</Text>

              <Text style={styles.label}>Description:</Text>
              <Text style={styles.text}>{description}</Text>

              <Text style={styles.label}>Unit:</Text>
              <Text style={styles.text}>{unit}</Text>

              <Text style={styles.label}>Resident Name:</Text>
              <Text style={styles.text}>{residentName}</Text>

              <Text style={styles.label}>Contact Phone Number:</Text>
              <Text style={styles.text}>{phoneNumber}</Text>

              <Text style={styles.label}>Contact Email:</Text>
              <Text style={styles.text}>{email}</Text>
              <Text style={styles.label}>Date Submitted:</Text>
              <Text style={styles.text}>{submitted}</Text>
            </ScrollView>
          </View>
          <Button
            compact
            mode="outlined"
            style={[styles.button, { marginTop: 20 }]}
            onPress={handleCompleteTask}
          >
            Mark Complete
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
    paddingBottom: 20, // Adjust this value to set the height of the ScrollView
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

export default MaintenanceInfo;
