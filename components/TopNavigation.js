import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TopNavigationBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="bars" size={24} color="#333" />
        </TouchableOpacity>
      </View>
      <View style={styles.centeredTextContainer}>
        <Text style={styles.centeredText}>HomEra</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 60,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 16,
    backgroundColor: '#f2f2f2',
    marginRight: 16,
    fontSize: 16,
    color: '#333',
  },
  menuButton: {
    padding: 8,
  },
  centeredTextContainer: {
    alignItems: 'center',
    paddingVertical: 0,
  },
  centeredText: {
    fontSize: 18,
    color: '#333',
  },
});

export default TopNavigationBar;