import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const ScheduleHome = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const markedDates = {
    [selectedDate]: { selected: true, selectedColor: '#00e6cf' },
  };

  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        <Calendar style={styles.calendar} onDayPress={handleDayPress} markedDates={markedDates} />
      </View>
      {selectedDate && (
        <View style={styles.scheduleContainer}>
          <Text style={styles.scheduleText}>Schedule for {selectedDate}</Text>
          <View style={styles.line} />
          <View style={styles.scheduleItem}>
            <Text style={styles.scheduleItemText}>9:00 AM - 10:00 AM: Meeting</Text>
          </View>
          <View style={styles.scheduleItem}>
            <Text style={styles.scheduleItemText}>2:00 PM - 3:00 PM: Presentation</Text>
          </View>
          <View style={styles.scheduleItem}>
            <Text style={styles.scheduleItemText}>4:00 PM - 5:00 PM: Interview</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calendarContainer: {
    flex: 2,
    padding: 16,
  },
  calendar: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
  },
  scheduleContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    marginTop: -516,
  },
  scheduleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  line: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 8,
  },
  scheduleItem: {
    marginBottom: 8,
  },
  scheduleItemText: {
    fontSize: 16,
  },
});

export default ScheduleHome;