import React, { useState } from "react";
import { View, StyleSheet, ScrollView, ImageBackground,FlatList } from "react-native";
import { Calendar } from "react-native-calendars";
import { Button, TextInput, Text, Portal, Modal } from "react-native-paper";
import DatePicker from "react-native-modern-datepicker";
import moment from "moment";
import Icon from "react-native-vector-icons/FontAwesome";

const ScheduleHome = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [userInput, setUserInput] = useState("");
  const [userInputDescription, setUserInputDescription] = useState("");
  const [visible, setVisible] = useState(false);
  const [filteredScheduleItems, setFilteredScheduleItems] = useState([]);
  const [scheduleItems, setScheduleItems] = useState([]);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    const filteredItems = scheduleItems.filter(
      (item) => item.id === day.dateString
    );

    // Order filteredItems by time in ascending order
    const sortedItems = filteredItems.sort((a, b) => {
      const timeA = moment(a.time, "h:mm A");
      const timeB = moment(b.time, "h:mm A");
      return timeA.diff(timeB);
    });

    setFilteredScheduleItems(sortedItems);
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
      setScheduleItems([...scheduleItems, newItem]);
      setUserInput("");
      setUserInputDescription("");
      setSelectedDate("");
      setSelectedTime("");
      hideModal();
    }
  };
  const markedDates = {
    [selectedDate]: {
      selected: true,
      selectedColor: "#00e6cf",
    },
  };
  const renderScheduleItem = ({ item }) => (
    <View style={styles.scheduleItem}>
      <View style={styles.scheduleItemDetails}>
        <Text style={styles.scheduleItemTime}>{item.time}</Text>
        <Text style={styles.scheduleItemTitle}>{item.title}</Text>
      </View>
      <View style={styles.scheduleItemDescriptionContainer}>
        <Icon
          name="caret-right"
          size={20}
          color="#999"
          style={styles.descriptionIcon}
        />
        <Text style={styles.scheduleItemDescription}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground
      source={require("../images/gradient.png")}
      style={styles.background}
    >
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Schedule</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            compact
            mode="outlined"
            style={{ marginTop: 30 }}
            onPress={() => {
              showModal();
            }}
          >
            New
          </Button>
        </View>
      </View>
      <View style={styles.calendarContainer}>
        <Calendar
          style={styles.calendar}
          onDayPress={handleDayPress}
          markedDates={markedDates}
        />
      </View>
      {filteredScheduleItems.length === 0 ? (
        <View style={styles.noItemsContainer}>
          <Text style={styles.noItemsText}>Please Select a Date</Text>
        </View>
      ) : (
        <View style={styles.scheduleContainer}>
          <FlatList
            data={filteredScheduleItems}
            renderItem={renderScheduleItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text>New Maintenance for Apartment 1</Text>
          <TextInput
            label="Title"
            mode="outlined"
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
        </Modal>
      </Portal>
    </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  scheduleItemDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  calendarContainer: {
    flex: 1,
    padding: 16,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  calendar: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
  },
  scheduleContainer: {
    flex: 1,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: "#F8F8F8",
    marginBottom: 40,
  },
  scheduleItemTime: {
    marginRight: 5,
  },
  scheduleItemTitle: {
    marginRight: 10,
  },
  scheduleItemDescription: {
    marginLeft: 20,
  },
  line: {
    height: 1,
    backgroundColor: "gray",
    marginVertical: 8,
  },
  noItemsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  noItemsText: {
    fontSize: 16,
  },
  scheduleItem: {
    marginBottom: 8,
  },
  buttonContainer: {
    marginLeft: 10,
  },
  scheduleItemText: {
    fontSize: 16,
  },
  scheduleItemDescriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
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

export default ScheduleHome;
