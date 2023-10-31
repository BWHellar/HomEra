import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import {
  Button,
  SegmentedButtons,
  Text,
  TextInput,
  Modal,
} from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
import { PERSONLIST, AMOUNTLIST, BUYPOINTSLIST, CARDLIST } from "../constants";
import moment from "moment";

const LoyaltyPage = () => {
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [isModalVisibleAdd, setModalVisibleAdd] = React.useState(false);
  const [showDropDown, setShowDropDown] = React.useState(false);
  const [person, setPerson] = React.useState(false);
  const [amount, setAmount] = React.useState(false);
  const [buyPoints, setBuyPoints] = React.useState(false);
  const [cardList, setCardList] = React.useState(false);
  const [showDropDown2, setShowDropDown2] = React.useState(false);
  const [text, setText] = React.useState("");
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleModalAdd = () => {
    setModalVisibleAdd(!isModalVisibleAdd);
  };
  const handleSegmentedButtonChange = (value) => {
    if (value === "upload") {
    } else if (value === "submit") {
      handleAddItem();
    }
  };

  return (
    <ImageBackground
      source={require("../images/gradient.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
              compact
              mode="outlined"
              style={[styles.button, { marginTop: 30 }]}
              onPress={toggleModalAdd}
              color="#A875FF"
            >
              Add Points
            </Button>
            <Button
              compact
              mode="outlined"
              style={[styles.button, { marginTop: 30 }]}
              onPress={toggleModal}
              color="#A875FF"
            >
              Send Points
            </Button>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../images/LoyaltyImage.png")}
            style={styles.bannerImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.scrollViewContainer}>
          <Text style={styles.title}>Transactions</Text>
          <View style={styles.scrollViewWrapper}>
            <ScrollView style={styles.scrollView}>
              {Array(6)
                .fill()
                .map((_, index) => (
                  <>
                    <View style={styles.row} key={index}>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text
                          style={[
                            styles.cell,
                            styles.leftAlign,
                            styles.textPadding,
                          ]}
                        >
                          {moment()
                            .subtract(Math.floor(Math.random() * 365), "days")
                            .format("MM-DD-YY HH:mm")}
                        </Text>
                        <Text
                          style={[
                            styles.cell,
                            styles.leftBottomAlign,
                            styles.textPadding,
                          ]}
                        >
                          - {Math.floor(Math.random() * 10) * 100 + 100} Points
                        </Text>
                      </View>
                      <Text
                        style={[
                          styles.cell,
                          styles.leftAlign,
                          styles.textPadding,
                          { flex: 1, marginTop: 8 },
                        ]}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Text>
                    </View>
                    <View style={styles.line} />
                  </>
                ))}
            </ScrollView>
          </View>
        </View>
        <Modal
          visible={isModalVisible}
          onDismiss={toggleModal}
          contentContainerStyle={styles.modalContainer}
        >
          <Text>Gift Points</Text>
          <DropDown
            label={"Person"}
            mode={"outlined"}
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            value={person}
            setValue={setPerson}
            list={PERSONLIST}
          />
          <DropDown
            label={"Points"}
            mode={"outlined"}
            visible={showDropDown2}
            showDropDown={() => setShowDropDown2(true)}
            onDismiss={() => setShowDropDown2(false)}
            value={amount}
            setValue={setAmount}
            list={AMOUNTLIST}
          />
          <TextInput
            label="Send a Note"
            multiline
            mode="outlined"
            onChangeText={setText}
            value={text}
            numberOfLines={4}
            style={{ minHeight: 100 }}
          />
          <View style={styles.segmentedButtonsContainer}>
            <SegmentedButtons
              onValueChange={handleSegmentedButtonChange}
              buttons={[
                {
                  value: "upload",
                  label: "Upload",
                  icon: "cancel",
                },
                {
                  value: "add",
                  label: "Add",
                  icon: "check",
                },
              ]}
            />
          </View>
        </Modal>
        <Modal
          visible={isModalVisibleAdd}
          onDismiss={toggleModalAdd}
          contentContainerStyle={styles.modalContainer}
        >
          <Text>Add Points</Text>
          <DropDown
            label={"Point Package"}
            mode={"outlined"}
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            value={buyPoints}
            setValue={setBuyPoints}
            list={BUYPOINTSLIST}
          />
          <DropDown
            label={"Payment"}
            mode={"outlined"}
            visible={showDropDown2}
            showDropDown={() => setShowDropDown2(true)}
            onDismiss={() => setShowDropDown2(false)}
            value={cardList}
            setValue={setCardList}
            list={CARDLIST}
          />
          <View style={styles.segmentedButtonsContainer}>
            <SegmentedButtons
              onValueChange={handleSegmentedButtonChange}
              buttons={[
                {
                  value: "cancel",
                  label: "cancel",
                  icon: "cancel",
                },
                {
                  value: "add",
                  label: "Add",
                  icon: "check",
                },
              ]}
            />
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 0,
  },
  segmentedButtonsContainer: {
    marginTop: 10,
  },
  leftAlign: {
    textAlign: "left",
  },
  leftBottomAlign: {
    textAlign: "right",
    fontWeight: "bold",
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 0,
  },
  cell: {
    flex: 1,
    fontSize: 14,
  },
  textPadding: {
    paddingHorizontal: 5,
  },
  scrollViewContainer: {
    flex: 1,
  },
  scrollView: {
    height: "50%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginTop: 20,
  },
  scrollViewWrapper: {
    height: "80%",
  },
  listItem: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default LoyaltyPage;
