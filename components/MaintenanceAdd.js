import React from "react";
import {
  ImageBackground,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Keyboard
} from "react-native";
import {
  Checkbox,
  SegmentedButtons,
  Text,
  TextInput,
} from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
import { UNITLIST, MAINTENANCEITEMS } from "../constants";
import { apiKey } from "../secrets";

const MaintenanceAdd = ({ navigation }) => {
  const [showDropDown, setShowDropDown] = React.useState(false);
  const [showDropDown2, setShowDropDown2] = React.useState(false);
  const [category, setCategory] = React.useState("");
  const [text, setText] = React.useState("");
  const [checkedEnter, setCheckedEnter] = React.useState(false);
  const [checkedFire, setCheckedFire] = React.useState(false);
  const [checkedPet, setCheckedPet] = React.useState(false);
  const [unit, setUnit] = React.useState("");

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };
  const categoryList = MAINTENANCEITEMS.map((item) => ({
    label: item.title,
    value: item.title,
  }));
  const handleSegmentedButtonChange = (value) => {
    if (value === "upload") {
    } else if (value === "submit") {
      handleAddItem();
    }
  };
  const handleAddItem = async () => {
    var newItem = {
      id: 3,
      unit: unit,
      property: "The First Property",
      propertyId: 1,
      category: category,
      description: text,
      enter: checkedEnter,
      fire: checkedFire,
      pet: checkedPet,
      image: "image3.jpg",
    };
    const response = await fetch(`http://${apiKey}:3000/maintenance`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });

    const data = await response.json();
    console.log(data); 
  };

  return (
    <>
      <ImageBackground
        source={require("../images/gradient.png")}
        style={styles.background}
      >
        <TouchableWithoutFeedback onPress={handlePressOutside}>
          <View style={styles.container}>
            <Text>New Request for Apartment 1</Text>
            <View style={styles.input}>
              <DropDown
                label={"Unit"}
                mode={"outlined"}
                visible={showDropDown}
                showDropDown={() => setShowDropDown(true)}
                onDismiss={() => setShowDropDown(false)}
                value={unit}
                setValue={setUnit}
                list={UNITLIST}
              />
            </View>
            <View style={styles.input}>
              <DropDown
                label={"Category"}
                mode={"outlined"}
                style={styles.input}
                visible={showDropDown2}
                showDropDown={() => setShowDropDown2(true)}
                onDismiss={() => setShowDropDown2(false)}
                value={category}
                setValue={setCategory}
                list={categoryList}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                label="Description"
                multiline
                mode="outlined"
                onChangeText={setText}
                value={text}
                numberOfLines={4}
                style={[styles.input, { minHeight: 150 }]}
              />
            </View>
            <Checkbox.Item
              label="Enter Permission?"
              status={checkedEnter ? "checked" : "unchecked"}
              onPress={() => setCheckedEnter(!checkedEnter)}
            />
            <Checkbox.Item
              label="Fire/Water Related?"
              status={checkedFire ? "checked" : "unchecked"}
              onPress={() => setCheckedFire(!checkedFire)}
            />
            <Checkbox.Item
              label="Pet Ownership?"
              status={checkedPet ? "checked" : "unchecked"}
              onPress={() => setCheckedPet(!checkedPet)}
            />
            <SegmentedButtons
              onValueChange={handleSegmentedButtonChange}
              style={styles.buttons}
              buttonStyle={styles.button}
              buttons={[
                {
                  value: "upload",
                  label: "Upload",
                  icon: "camera",
                  uncheckedColor: "#A875FF",
                  checkedColor: "#A875FF",
                },
                {
                  value: "submit",
                  label: "Submit",
                  icon: "check",
                  uncheckedColor: "#A875FF",
                  checkedColor: "#A875FF",
                },
              ]}
            />
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
  input: {
    marginBottom: 12,
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
});

export default MaintenanceAdd;
