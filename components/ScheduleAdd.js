import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground,ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { TextInput, Button, Modal } from "react-native-paper";
import DatePicker from "react-native-modern-datepicker";
import DropDown from "react-native-paper-dropdown";
import { PERSONLIST } from "../constants";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const ScheduleAdd = ({ navigation }) => {
  const [userInput, setUserInput] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [userInputDescription, setUserInputDescription] = useState("");
  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    if (selectedDate && userInput) {
      const formattedTime = moment(selectedTime, "HH:mm").format("h:mm A");
      const newItem = {
        id: selectedDate.replace(/\//g, "-"),
        time: formattedTime,
        title: userInput,
        description: userInputDescription,
      };
      console.log(newItem)
    }
    navigation.navigate("Schedule")
  };
  return (
    <>
    <ImageBackground
      source={require("../images/gradient.png")}
      style={styles.background}
    >
      <TouchableWithoutFeedback onPress={handlePressOutside}>
        <View style={styles.container}>
          <Text>New Schedule</Text>
          <TextInput
            label="Title"
            mode="outlined"
            style={styles.title}
            value={userInput}
            onChangeText={setUserInput}
          />
          <DatePicker
            onDateChange={(date) => setSelectedDate(date)}
            onTimeChange={(time) => setSelectedTime(time)}
            value={selectedDate}
          />
          <TextInput
            label="Description"
            multiline
            mode="outlined"
            onChangeText={setUserInputDescription}
            value={userInputDescription}
            numberOfLines={4}
            style={{ minHeight: 100 }}
          />
          <Button
            compact
            mode="contained-tonal"
            style={{ marginTop: 30 }}
            onPress={handleSubmit}
          >
            Submit
          </Button>
        </View>
      </TouchableWithoutFeedback>
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
});

export default ScheduleAdd;
