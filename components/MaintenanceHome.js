import React, { useState } from "react";
import {
  ImageBackground,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import { Button, Portal, Text, Modal } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

const MaintenanceHome = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);
  const [visible3, setVisible3] = React.useState(false);
  const [details, setDetails] = React.useState({});
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const hideModal3 = () => setVisible3(false);
  const [inputList, setInputList] = useState([
    {
      title: "Fridge",
      description: "Something is broken and it needs to be fixed.",
      unit: "Unit 1",
      fire: true,
      enter: false,
      pet: true,
    },
    {
      title: "Mixer",
      description: "Something is broken and it needs to be fixed.",
      unit: "Unit 2",
      fire: false,
      enter: true,
      pet: false,
    },
  ]);

  const showDetails = (item) => {
    setVisible3(true);
    setDetails(item);
  };
  const renderItem = ({ item }) => (
    <TouchableWithoutFeedback
      onPress={() => {
        showDetails(item);
      }}
    >
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Icon name="wrench" size={18} color="#000" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>
              {item.title} - {item.unit}
            </Text>
            <Text style={styles.descriptionText}>{item.description}</Text>
          </View>
          <Icon
            onPress={() => {
              showModal(item.title);
            }}
            name="eraser"
            size={14}
            color="#000"
            style={styles.icon}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <ImageBackground
      source={require("../images/gradient.png")}
      style={styles.background}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <View style={styles.analyticsContainer}>
              <View style={styles.analyticsBox}>
                <Text style={styles.analyticsLabelText}>New</Text>
                <Text style={styles.analyticsNumberText}>
                  {Math.floor(Math.random() * 100)}
                </Text>
              </View>
              <View style={styles.analyticsBox}>
                <Text style={styles.analyticsLabelText}>Urgent</Text>
                <Text style={styles.analyticsNumberText}>
                  {Math.floor(Math.random() * 100)}
                </Text>
              </View>
              <View style={styles.analyticsBox}>
                <Text style={styles.analyticsLabelText}>Waiting</Text>
                <Text style={styles.analyticsNumberText}>
                  {Math.floor(Math.random() * 100)}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              compact
              mode="outlined"
              style={[styles.button, { marginTop: 30 }]}
              onPress={() => navigation.navigate("Maintenance Add")}
              color="#A875FF"
            >
              Add
            </Button>
          </View>
        </View>
        <FlatList
          data={inputList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
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
    paddingBottom: 20,
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
  analyticsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
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
  button: {
    width: 80,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  titleText: {
    marginBottom: 5,
    fontSize: 16,
  },
  descriptionText: {
    fontSize: 14,
  },
  card: {
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
  },
  analyticsNumberText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  detailsColumn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
