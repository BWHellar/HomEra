import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  FlatList,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { Button,  Text } from "react-native-paper";
import moment from "moment";
import Icon from "react-native-vector-icons/FontAwesome";

const ScheduleHome = ({navigation}) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [filteredScheduleItems, setFilteredScheduleItems] = useState([]);
  const [scheduleItems, setScheduleItems] = useState([]);

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    const filteredItems = scheduleItems.filter(
      (item) => item.id === day.dateString
    );

    const sortedItems = filteredItems.sort((a, b) => {
      const timeA = moment(a.time, "h:mm A");
      const timeB = moment(b.time, "h:mm A");
      return timeA.diff(timeB);
    });

    setFilteredScheduleItems(sortedItems);
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
            <View style={styles.analyticsContainer}>
              <View style={styles.analyticsBox}>
                <Text style={styles.analyticsLabelText}>New</Text>
                <Text style={styles.analyticsNumberText}>
                  {Math.floor(Math.random() * 100)}
                </Text>
              </View>
              <View style={styles.analyticsBox}>
                <Text style={styles.analyticsLabelText}>Upcoming</Text>
                <Text style={styles.analyticsNumberText}>
                  {Math.floor(Math.random() * 100)}
                </Text>
              </View>
              <View style={styles.analyticsBox}>
                <Text style={styles.analyticsLabelText}>Attention</Text>
                <Text style={styles.analyticsNumberText}>
                  {Math.floor(Math.random() * 100)}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
          <Button color="#00e6cf" title="Add"  />

            <Button
              compact
              mode="outlined"
              style={[styles.button, { marginTop: 0 }]}
              onPress={() => {navigation.navigate("Schedule Add")}}
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
  analyticsNumberText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  calendarContainer: {
    flex: 1,
    padding: 16,
  },
  button: {
    width: 80,
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
    paddingBottom: 20,
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
