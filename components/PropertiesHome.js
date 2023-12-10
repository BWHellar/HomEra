import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Modal, Button } from "react-native-paper";
import LoadingData from "./LoadingData";
import NoData from "./NoData";

const PropertiesHome = ({ navigation }) => {
  const [dataList, setDataList] = React.useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [address, setAddress] = useState("");

  const handleAddButtonPress = () => {
    setModalVisible(true);
  };

  const handleOkButtonPress = () => {
    setModalVisible(false);
    navigation.navigate("Properties Add", { address });

  };

  useEffect(() => {
    getMyData();
  }, []);

  const getMyData = async () => {
    setTimeout(() => {
      setDataList([
        { id: "1", name: "Property 1", info: "Random information 1" },
        { id: "2", name: "Property 2", info: "Random information 2" },
        { id: "3", name: "Property 3", info: "Random information 3" },
      ]);
    }, 2000);
  };

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
          <View style={styles.analyticsContainer}>
            <View style={styles.analyticsBox}>
              <Text style={styles.analyticsLabelText}>Properties</Text>
              <Text style={styles.analyticsNumberText}>
                {Math.floor(Math.random() * 10)}
              </Text>
            </View>
            <View style={styles.analyticsBox}>
              <Text style={styles.analyticsLabelText}>Units</Text>
              <Text style={styles.analyticsNumberText}>
                {Math.floor(Math.random() * 100)}
              </Text>
            </View>
            <View style={styles.analyticsBox}>
              <Text style={styles.analyticsLabelText}>Residents</Text>
              <Text style={styles.analyticsNumberText}>
                {Math.floor(Math.random() * 100)}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            mode="outlined"
            compact
            style={[styles.button, { marginTop: 30 }]}
            onPress={handleAddButtonPress}
            color="#A875FF"
          >
            Add
          </Button>
        </View>
      </View>

      {dataList?.length === 0 ? (
        <LoadingData />
      ) : dataList === null ? (
        <NoData />
      ) : (
        <FlatList
          data={dataList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
      <Modal visible={modalVisible} onDismiss={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Enter address"
              value={address}
              onChangeText={setAddress}
            />

            <Button
              mode="contained"
              style={styles.okButton}
              onPress={handleOkButtonPress}
              color="#A875FF"
            >
              OK
            </Button>
          </View>
        </View>
      </Modal>
    </View>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    height: 150, 
    width: 300,
    borderRadius: 8,
    alignItems: 'center', 
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  okButton: {
    marginTop: 10,
    width:'100%',
    alignSelf: 'flex-end',
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginLeft: 10,
    paddingBottom: 20,
  },
  button: {
    width: 80,
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
});

export default PropertiesHome;
