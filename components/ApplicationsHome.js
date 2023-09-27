import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const ApplicationsHome = ({ navigation }) => {
  const data = [
    { id: '1', name: 'Application 1', info: 'Random information 1' },
    { id: '2', name: 'Application 2', info: 'Random information 2' },
    { id: '3', name: 'Application 3', info: 'Random information 3' },
    // Add more entries as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text>{item.name}</Text>
      <Text>{item.info}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Applications</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button color="#00e6cf" title="Add" onPress={() => {navigation.navigate("Applications Add")}} />
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginLeft: 10,
  },
  card: {
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
  },
});

export default ApplicationsHome;