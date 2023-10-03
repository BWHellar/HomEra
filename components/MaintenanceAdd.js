import React from "react";
import {
  ImageBackground,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from "react-native";
import {
  Checkbox,
  SegmentedButtons,
  Text,
  TextInput,
} from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
import { UNITLIST, MAINTENANCEITEMS } from "../constants";

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
  const handleAddItem = () => {
    const newItem = {
      title: text,
      description: category,
      unit: unit,
      fire: checkedFire,
      enter: checkedEnter,
      pet: checkedPet,
    };
    console.log(newItem);
    navigation.navigate("Maintenance");
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
              buttons={[
                {
                  value: "upload",
                  label: "Upload",
                  icon: "camera",
                },
                {
                  value: "submit",
                  label: "Submit",
                  icon: "check",
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
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default MaintenanceAdd;