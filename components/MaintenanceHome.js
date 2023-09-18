import React, { useState } from "react";

import { ImageBackground, View, StyleSheet, ScrollView } from "react-native";
import {
  List,
  IconButton,
  Avatar,
  Card,
  Badge,
  Button,
  Checkbox,
  SegmentedButtons,
  Portal,
  Text,
  TextInput,
  Modal,
} from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
import { UNITLIST, MAINTENANCEITEMS } from "../constants";

const MaintenanceHome = () => {
  const [visible, setVisible] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [checkedEnter, setCheckedEnter] = React.useState(false);
  const [checkedFire, setCheckedFire] = React.useState(false);
  const [checkedPet, setCheckedPet] = React.useState(false);
  const [text, setText] = React.useState("");
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const showModal2 = () => setVisible2(true);
  const hideModal2 = () => setVisible2(false);
  const [showDropDown, setShowDropDown] = React.useState(false);
  const [showDropDown2, setShowDropDown2] = React.useState(false);
  const [unit, setUnit] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [inputList, setInputList] = useState([
    {
      title: "Fridge",
      description: "Category 1",
      unit: "Unit 1",
      fire: true,
      enter: false,
      pet: true,
    },
    {
      title: "Item 2",
      description: "Category 2",
      unit: "Unit 2",
      fire: false,
      enter: true,
      pet: false,
    },
  ]);

  const categoryList = MAINTENANCEITEMS.map((item) => ({
    label: item.title,
    value: item.title,
  }));
  const handleSegmentedButtonChange = (value) => {
    if (value === "upload") {
    } else if (value === "submit") {
      handleAddItem()
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
    setInputList((prevInputList) => [...prevInputList, newItem]);
    setText("");
    setCategory("");
    setUnit("");
    setCheckedEnter(false);
    setCheckedPet(false);
    setCheckedFire(false);
    hideModal2(true)
  };

  return (
    <ImageBackground
      source={require("../images/gradient.png")}
      style={styles.background}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Maintenance</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              compact
              mode="outlined"
              style={{ marginTop: 30 }}
              onPress={showModal2}
            >
              New
            </Button>
          </View>
        </View>
        <ScrollView style={styles.scrollSection}>
          {inputList.map((item, index) => (
            <List.Item
              key={index}
              title={item.title}
              description={item.description}
              left={(props) => <List.Icon {...props} icon="wrench" />}
              right={(props) => (
                <IconButton
                  icon="dots-horizontal"
                  onPress={() => {
                    showModal(item.title);
                  }}
                />
              )}
            />
          ))}
        </ScrollView>
      </View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text>Would you like to delete this item?</Text>
          <Button
            compact
            textColor="red"
            mode="contained-tonal"
            style={{ marginTop: 30 }}
          >
            Delete
          </Button>
        </Modal>
        <Modal
          visible={visible2}
          onDismiss={hideModal2}
          contentContainerStyle={containerStyle}
        >
          <Text>New Request for Apartment 1</Text>
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
          <DropDown
            label={"Category"}
            mode={"outlined"}
            visible={showDropDown2}
            showDropDown={() => setShowDropDown2(true)}
            onDismiss={() => setShowDropDown2(false)}
            value={category}
            setValue={setCategory}
            list={categoryList}
          />
          <TextInput
            label="Description"
            multiline
            mode="outlined"
            onChangeText={setText}
            value={text}
            numberOfLines={4}
            style={{ minHeight: 100 }}
          />
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
        </Modal>
      </Portal>
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
  titleContainer: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginLeft: 10,
  },
  scrollSection: {
    marginBottom: 40,
  },
});
const containerStyle = {
  backgroundColor: "white",
  padding: 20,
  borderRadius: 10,
  width: "80%",
  marginLeft: "auto",
  marginRight: "auto",
};

export default MaintenanceHome;
