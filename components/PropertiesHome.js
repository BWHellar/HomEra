import React, { useEffect } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import LoadingData from "./LoadingData";
import NoData from "./NoData";

const PropertiesHome = () => {
  const [dataList, setDataList] = React.useState([]);

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
          <Text style={styles.title}>Properties</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button color="#00e6cf" title="Add" onPress={() => {}} />
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
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginLeft: 10,
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
});

export default PropertiesHome;
