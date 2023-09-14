import React from "react";
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

const MaintenanceHome = () => {
  const [visible, setVisible] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [text, setText] = React.useState("");
  const [value, setValue] = React.useState("");
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const showModal2 = () => setVisible2(true);
  const hideModal2 = () => setVisible2(false);
  const [showDropDown, setShowDropDown] = React.useState(false);
  const [showDropDown2, setShowDropDown2] = React.useState(false);
  const [unit, setUnit] = React.useState("");
  const [category, setCategory] = React.useState("");

  const unitList = [
    {
      label: "Unit 1",
      value: "1",
    },
    {
      label: "Unit 2",
      value: "2",
    },
    {
      label: "Unit 3",
      value: "3",
    },
  ];
  const items = [
    {
      title: "Fridge",
      description: "Item description",
      leftIcon: "fridge",
      rightIcon: "dots-horizontal",
    },
    {
      title: "Doors",
      description: "Item description",
      leftIcon: "door",
      rightIcon: "dots-horizontal",
    },
    {
      title: "Washer",
      description: "Item description",
      leftIcon: "dishwasher",
      rightIcon: "dots-horizontal",
    },

    {
      title: "Faucet",
      description: "Item description",
      leftIcon: "water-pump",
      rightIcon: "dots-horizontal",
    },
    {
      title: "Stove",
      description: "Item description",
      leftIcon: "stove",
      rightIcon: "dots-horizontal",
    },
    {
      title: "Paint",
      description: "Item description",
      leftIcon: "format-paint",
      rightIcon: "dots-horizontal",
    },

    {
      title: "Lightbulb",
      description: "Item description",
      leftIcon: "lightbulb",
      rightIcon: "dots-horizontal",
    },
    {
      title: "Locks",
      description: "Item description",
      leftIcon: "lock",
      rightIcon: "dots-horizontal",
    },
    {
      title: "External",
      description: "Item description",
      leftIcon: "grass",
      rightIcon: "dots-horizontal",
    },

    {
      title: "Windows",
      description: "Item description",
      leftIcon: "window-open-variant",
      rightIcon: "dots-horizontal",
    },
    {
      title: "Trash",
      description: "Item description",
      leftIcon: "delete",
      rightIcon: "dots-horizontal",
    },
    {
      title: "Miscellaneous",
      description: "Item description",
      leftIcon: "domain",
      rightIcon: "dots-horizontal",
    },
  ];
  const categoryList = items.map((item) => ({
    label: item.title,
    value: item.title,
  }));
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
          {items.map((item, index) => (
            <List.Item
              key={index}
              title={item.title}
              description={item.description}
              left={(props) => <List.Icon {...props} icon={item.leftIcon} />}
              right={(props) => (
                <IconButton
                  icon={item.rightIcon}
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
            list={unitList}
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
            numberOfLines={4}
            style={{ minHeight: 100 }}
          />
          <Checkbox.Item label="Enter Permission?" status="checked" />
          <Checkbox.Item label="Fire/Water Related?" status="checked" />
          <Checkbox.Item label="Pet Ownership?" status="checked" />
          <SegmentedButtons
            value={value}
            onValueChange={setValue}
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
