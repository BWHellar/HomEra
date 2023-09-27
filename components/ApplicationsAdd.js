import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TextInput, Button, Modal } from "react-native-paper";
import DatePicker from "react-native-modern-datepicker";
import DropDown from "react-native-paper-dropdown";
import { PERSONLIST } from "../constants";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const ApplicationsAdd = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showDropDown2, setShowDropDown2] = useState(false);
  const [showDropDown3, setShowDropDown3] = useState(false);
  const [showDropDown4, setShowDropDown4] = useState(false);
  const [showDropDown5, setShowDropDown5] = useState(false);
  const [showDropDown6, setShowDropDown6] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [inputs, setInputs] = useState({
    FirstName: "",
    LastName: "",
    MoveIn: "",
    LeasingAgent: "",
    FloorPlan: "",
    UnitNumber: "",
    Adults: "",
    Children: "",
    Pets: "",
  });
  const [inputs2, setInputs2] = useState({
    MobilePhone: "",
    GovernmentId: "",
    IDNumber: "",
    IssuingState: "",
    DOB: "",
    MaritalStatus: "",
    MonthlyRent: "",
    From: "",
    To: "",
    LandlordName: "",
    LandordEmail: "",
    LandlordPhone: "",
    Occupation: "",
    Company: "",
    FromCompany: "",
    ToCompany: "",
    Income: "",
    SupervisorName: "",
    SupervisorEmail: "",
  });

  const handleInputChange = (field, value) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [field]: value,
    }));
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Unit Info</Text>
          <TextInput
            style={styles.input}
            label="First Name"
            mode="outlined"
            value={inputs.FirstName}
            onChangeText={(value) => handleInputChange("FirstName", value)}
          />
          <TextInput
            style={styles.input}
            label="Last Name"
            mode="outlined"
            value={inputs.LastName}
            onChangeText={(value) => handleInputChange("LastName", value)}
          />
          <TextInput
            style={styles.input}
            label="Move In Date"
            mode="outlined"
            value={selectedDate}
            onTouchStart={() => setShowDatePicker(true)}
          />

          <DropDown
            label={"Leasing Agent"}
            mode={"outlined"}
            visible={showDropDown}
            style={styles.input}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            value={inputs.LeasingAgent}
            setValue={(value) => handleInputChange("LeasingAgent", value)}
            list={PERSONLIST}
          />
          <DropDown
            label={"Floor Plan"}
            mode={"outlined"}
            style={styles.input}
            visible={showDropDown2}
            showDropDown={() => setShowDropDown2(true)}
            onDismiss={() => setShowDropDown2(false)}
            value={inputs.FloorPlan}
            setValue={(value) => handleInputChange("FloorPlan", value)}
            list={PERSONLIST}
          />
          <DropDown
            label={"Unit Number"}
            mode={"outlined"}
            style={styles.input}
            visible={showDropDown3}
            showDropDown={() => setShowDropDown3(true)}
            onDismiss={() => setShowDropDown3(false)}
            value={inputs.UnitNumber}
            setValue={(value) => handleInputChange("UnitNumber", value)}
            list={PERSONLIST}
          />
          <TextInput
            style={styles.input}
            label="Adults"
            mode="outlined"
            value={inputs.Adults}
            onChangeText={(value) => handleInputChange("Adults", value)}
          />
          <TextInput
            style={styles.Children}
            label="Last Name"
            mode="outlined"
            value={inputs.Children}
            onChangeText={(value) => handleInputChange("Children", value)}
          />
          <TextInput
            style={styles.input}
            label="Pets"
            mode="outlined"
            value={inputs.Pets}
            onChangeText={(value) => handleInputChange("Pets", value)}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Primary Applicant</Text>
          <TextInput
            style={styles.input}
            label="First Name"
            mode="outlined"
            value={inputs.FirstName}
            onChangeText={(value) => handleInputChange("FirstName", value)}
          />
          <TextInput
            style={styles.input}
            label="Last Name"
            mode="outlined"
            value={inputs.LastName}
            onChangeText={(value) => handleInputChange("LastName", value)}
          />
          <TextInput
            style={styles.input}
            label="Mobile Phone"
            mode="outlined"
            value={inputs2.MobilePhone}
            onChangeText={(value) => handleInputChange("MobilePhone", value)}
          />
          <DropDown
            label={"Government Id"}
            mode={"outlined"}
            visible={showDropDown4}
            style={styles.input}
            showDropDown={() => setShowDropDown4(true)}
            onDismiss={() => setShowDropDown4(false)}
            value={inputs2.GovernmentId}
            setValue={(value) => handleInputChange("GovernmentId", value)}
            list={PERSONLIST}
          />
          <TextInput
            style={styles.input}
            label="ID Number"
            mode="outlined"
            value={inputs2.IDNumber}
            onChangeText={(value) => handleInputChange("IDNumber", value)}
          />
          <DropDown
            label={"Issuing State"}
            mode={"outlined"}
            visible={showDropDown5}
            style={styles.input}
            showDropDown={() => setShowDropDown5(true)}
            onDismiss={() => setShowDropDown5(false)}
            value={inputs2.IssuingState}
            setValue={(value) => handleInputChange("IssuingState", value)}
            list={PERSONLIST}
          />
          <TextInput
            style={styles.input}
            label="Date of Birth"
            mode="outlined"
            value={selectedDate}
            onTouchStart={() => setShowDatePicker(true)}
          />
          <DropDown
            label={"Marital Status"}
            mode={"outlined"}
            visible={showDropDown6}
            style={styles.input}
            showDropDown={() => setShowDropDown6(true)}
            onDismiss={() => setShowDropDown6(false)}
            value={inputs2.MaritalStatus}
            setValue={(value) => handleInputChange("MaritalStatus", value)}
            list={PERSONLIST}
          />
          <Text style={styles.sectionTitle}>Leasing History</Text>
          <GooglePlacesAutocomplete
            placeholder="Address"
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
            }}
            query={{
              key: "YOUR API KEY",
              language: "en",
            }}
            styles={{
              textInputContainer: {
                backgroundColor: "white",
                borderWidth: 1,
                borderColor: "rgba(0, 0, 0, 0.3)",
                borderRadius: 5,
                paddingHorizontal: 10,
              },
              textInput: {
                height: 40,
                color: "black",
              },
            }}
          />
          <TextInput
            style={styles.input}
            label="Monthly Rent"
            mode="outlined"
            value={inputs2.MonthlyRent}
            onChangeText={(value) => handleInputChange("MonthlyRent", value)}
          />
          <TextInput
            style={styles.input}
            label="From"
            mode="outlined"
            value={selectedDate}
            onTouchStart={() => setShowDatePicker(true)}
          />
          <TextInput
            style={styles.input}
            label="To"
            mode="outlined"
            value={selectedDate}
            onTouchStart={() => setShowDatePicker(true)}
          />
          <TextInput
            style={styles.input}
            label="Landlord Name"
            mode="outlined"
            value={inputs2.LandlordName}
            onChangeText={(value) => handleInputChange("LandlordName", value)}
          />
          <TextInput
            style={styles.input}
            label="Landlord Email"
            mode="outlined"
            value={inputs2.LandlordEmail}
            onChangeText={(value) => handleInputChange("LandlordEmail", value)}
          />
          <TextInput
            style={styles.input}
            label="LandlordPhone"
            mode="outlined"
            value={inputs2.LandlordPhone}
            onChangeText={(value) => handleInputChange("LandlordPhone", value)}
          />
          <Text style={styles.sectionTitle}>Employment History</Text>
          <GooglePlacesAutocomplete
            placeholder="Address"
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
            }}
            query={{
              key: "YOUR API KEY",
              language: "en",
            }}
            styles={{
              textInputContainer: {
                backgroundColor: "white",
                borderWidth: 1,
                borderColor: "rgba(0, 0, 0, 0.3)",
                borderRadius: 5,
                paddingHorizontal: 10,
              },
              textInput: {
                height: 40,
                color: "black",
              },
            }}
          />
          <TextInput
            style={styles.input}
            label="Occupation"
            mode="outlined"
            value={inputs2.Occupation}
            onChangeText={(value) => handleInputChange("Occupation", value)}
          />
          
          <TextInput
            style={styles.input}
            label="Company"
            mode="outlined"
            value={inputs2.Company}
            onChangeText={(value) => handleInputChange("Company", value)}
          />
          <TextInput
            style={styles.input}
            label="Monthly Income"
            mode="outlined"
            value={inputs2.Income}
            onChangeText={(value) => handleInputChange("Income", value)}
          />
          <TextInput
            style={styles.input}
            label="Supervisor Name"
            mode="outlined"
            value={inputs.SupervisorName}
            onChangeText={(value) => handleInputChange("SupervisorName", value)}
          />
           <TextInput
            style={styles.input}
            label="Supervisor Email"
            mode="outlined"
            value={inputs.SupervisorEmail}
            onChangeText={(value) => handleInputChange("SupervisorEmail", value)}
          />
          <TextInput
            style={styles.input}
            label="From"
            mode="outlined"
            value={selectedDate}
            onTouchStart={() => setShowDatePicker(true)}
          />
          <TextInput
            style={styles.input}
            label="To"
            mode="outlined"
            value={selectedDate}
            onTouchStart={() => setShowDatePicker(true)}
          />
        </View>
        <Button mode="contained" onPress={() => console.log(inputs)}>
          Save
        </Button>
      </ScrollView>
      <Modal
        visible={showDatePicker}
        onDismiss={() => setShowDatePicker(false)}
        contentContainerStyle={styles.modalContent}
      >
        <DatePicker
          mode="date"
          onDateChange={(value) => handleInputChange("MoveIn", value)}
          value={inputs.MoveIn}
        />
        <Button onPress={() => setShowDatePicker(false)}>Close</Button>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 60,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    marginBottom: 10,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
  },
});

export default ApplicationsAdd;
