import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Calendar } from "react-native-calendars";
import { Button, Text, Portal, Modal } from "react-native-paper";
import DatePicker from 'react-native-modern-datepicker';

const ScheduleHome = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [visible, setVisible] = React.useState(false);

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const markedDates = {
    [selectedDate]: { selected: true, selectedColor: "#00e6cf" },
  };

  return (
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
      <ScrollView style={styles.scheduleContainer}>
      {selectedDate && (
        <View >
          <Text style={styles.scheduleText}>Schedule for {selectedDate}</Text>
          <View style={styles.line} />
          <View style={styles.scheduleItem}>
            <Text style={styles.scheduleItemText}>
              9:00 AM - 10:00 AM: Meeting
            </Text>
          </View>
          <View style={styles.scheduleItem}>
            <Text style={styles.scheduleItemText}>
              2:00 PM - 3:00 PM: Presentation
            </Text>
          </View>
          <View style={styles.scheduleItem}>
            <Text style={styles.scheduleItemText}>
              4:00 PM - 5:00 PM: Interview
            </Text>
          </View>
        </View>
      )}
      </ScrollView>
      <Portal>
      <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
 <DatePicker
      onSelectedChange={date => setSelectedDate(date)}
    />
          <Button
            compact
            textColor="red"
            mode="contained-tonal"
            style={{ marginTop: 30 }}
          >
            Delete
          </Button>
        </Modal>
        </Portal>
    </View>
    
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  calendarContainer: {
    flex: 2,
    padding: 16,
  },
  calendar: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
  },
  scheduleContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    // marginTop: -116,
    // height:'500px'
  },
  scheduleText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  // scrollSection: {
  //   height:'500px'
  // },
  line: {
    height: 1,
    backgroundColor: "gray",
    marginVertical: 8,
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
