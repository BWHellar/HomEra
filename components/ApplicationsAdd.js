import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TextInput, Button, Modal } from "react-native-paper";
import DatePicker from "react-native-modern-datepicker";
import DropDown from "react-native-paper-dropdown";
import { PERSONLIST } from "../constants";

const ApplicationsAdd = () => {
  const [showDropDown, setShowDropDown] = useState(false);
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

  const handleInputChange = (field, value) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [field]: value,
    }));
  };

  const handleDateConfirm = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
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
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            value={inputs.FloorPlan}
            setValue={(value) => handleInputChange("FloorPlan", value)}
            list={PERSONLIST}
          />
           <DropDown
            label={"Unit Number"}
            mode={"outlined"}
            style={styles.input}
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
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
          <Text style={styles.sectionTitle}>Section 2</Text>
          <TextInput
            style={styles.input}
            label="Input 3"
            mode="outlined"
            value={inputs.input3}
            onChangeText={(value) => handleInputChange("input3", value)}
          />
          <TextInput
            style={styles.input}
            label="Input 4"
            mode="outlined"
            value={inputs.input4}
            onChangeText={(value) => handleInputChange("input4", value)}
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
