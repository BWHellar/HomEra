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
import Icon from "react-native-vector-icons/FontAwesome";

import { UNITLIST, MAINTENANCEITEMS } from "../constants";

const MaintenanceHome = () => {
  const [visible, setVisible] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [visible3, setVisible3] = React.useState(false);
  const [checkedEnter, setCheckedEnter] = React.useState(false);
  const [checkedFire, setCheckedFire] = React.useState(false);
  const [checkedPet, setCheckedPet] = React.useState(false);
  const [details, setDetails] = React.useState({});
  const [text, setText] = React.useState("");
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const showModal2 = () => setVisible2(true);
  const hideModal2 = () => setVisible2(false);
  const showModal3 = () => setVisible3(true);
  const hideModal3 = () => setVisible3(false);
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
    setInputList((prevInputList) => [...prevInputList, newItem]);
    setText("");
    setCategory("");
    setUnit("");
    setCheckedEnter(false);
    setCheckedPet(false);
    setCheckedFire(false);
    hideModal2(true);
  };
  const showDetails = (item) => {
    setVisible3(true);
    setDetails(item);
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
              onPress={() => {
                showDetails(item);
              }}
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
          visible={visible3}
          onDismiss={hideModal3}
          contentContainerStyle={containerStyle}
        >
          <View style={styles.modalContent}>
            <Text style={styles.title}>
              {details.unit} - {details.title}
            </Text>

            <View style={styles.detailsContainer}>
              <View style={styles.detailsColumn}>
                <Icon
                  name={details.fire ? "check" : "times"}
                  size={16}
                  color={details.fire ? "green" : "red"}
                  style={styles.iconCheck}
                />
                <Text style={styles.iconText}>Fire</Text>
              </View>
              <View style={styles.detailsColumn}>
                <Icon
                  name={details.enter ? "check" : "times"}
                  size={16}
                  color={details.enter ? "green" : "red"}
                  style={styles.iconCheck}
                />
                <Text style={styles.iconText}>Enter</Text>
              </View>
              <View style={styles.detailsColumn}>
                <Icon
                  name={details.pet ? "check" : "times"}
                  size={16}
                  color={details.pet ? "green" : "red"}
                  style={styles.iconCheck}
                />
                <Text style={styles.iconText}>Pet</Text>
              </View>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>{details.description}</Text>
            </View>
          </View>
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
  descriptionContainer: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
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
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  buttonContainer: {
    marginLeft: 10,
  },
  scrollSection: {
    marginBottom: 40,
  },

  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  detailsColumn: {
    flex: 1,
    // flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center", // Center align the columns horizontally
  },
  icon: {
    marginRight: 8,
  },
  unit: {
    fontSize: 16,
    marginBottom: 10,
  },
});
const containerStyle = {
  backgroundColor: "white",
  padding: 10,
  borderRadius: 10,
  width: "80%",
  marginLeft: "auto",
  marginRight: "auto",
};

export default MaintenanceHome;
