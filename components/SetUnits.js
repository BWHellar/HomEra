import React, { useState, useRef } from "react";
import {
  ImageBackground,
  View,
  ScrollView,
  StyleSheet,
  FlatList,
} from "react-native";
import { FAB, Button, Text, TextInput } from "react-native-paper";

const SetUnits = ({ navigation }) => {
  const [cards, setCards] = useState([]); // State to store the cards
  const flatListRef = useRef(null); // Reference to the FlatList

  // Function to add a new card
  const addCard = () => {
    setCards((prevCards) => [
      ...prevCards,
      {
        label1: "Num",
        label2: "Floor",
        label3: "Beds",
        label4: "Baths",
        label5: "Size",
        label6: "Price",
        label7: "Status",
        label8: "Media",
      },
    ]);
    // flatListRef.current.scrollToIndex({ index: 0, animated: true });
  };

  // Function to update the inputs of a specific card
  const handleInputChange = (index, inputName, value) => {
    const updatedCards = [...cards];
    updatedCards[index][inputName] = value;
    setCards(updatedCards);
  };

  // Function to remove a card
  const removeCard = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  return (
    <>
      <ImageBackground
        source={require("../images/gradient.png")}
        style={styles.background}
      >
          <View style={styles.buttonRow}>
            <Text style={styles.cardCount}>{cards.length} Units</Text>
            <Button
              mode="outlined"
              style={styles.addButton}
              icon="plus"
              onPress={() => {
                addCard();
                flatListRef.current.scrollToEnd({ animated: true });
              }}
            >
              Add
            </Button>
          </View>
        <View style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <FlatList
              ref={flatListRef}
              data={cards}
              renderItem={({ item, index }) => (
                <View key={index} style={styles.card}>
                  <View style={styles.row}>
                    <TextInput
                      label="Num"
                      style={styles.input}
                      value={cards.input1}
                      onChangeText={(text) =>
                        handleInputChange(index, "input1", text)
                      }
                    />
                    <TextInput
                      label="Floor"
                      style={styles.input}
                      value={cards.input2}
                      onChangeText={(text) =>
                        handleInputChange(index, "input2", text)
                      }
                    />
                  </View>
                  <View style={styles.row}>
                    <TextInput
                      label="Beds"
                      style={styles.input}
                      value={cards.input3}
                      onChangeText={(text) =>
                        handleInputChange(index, "input3", text)
                      }
                    />
                    <TextInput
                      label="Baths"
                      style={styles.input}
                      value={cards.input4}
                      onChangeText={(text) =>
                        handleInputChange(index, "input4", text)
                      }
                    />
                  </View>
                  <View style={styles.row}>
                    <TextInput
                      label="Size"
                      style={styles.input}
                      value={cards.input5}
                      onChangeText={(text) =>
                        handleInputChange(index, "input5", text)
                      }
                    />
                    <TextInput
                      label="Price"
                      style={styles.input}
                      value={cards.input6}
                      onChangeText={(text) =>
                        handleInputChange(index, "input6", text)
                      }
                    />
                  </View>
                  <View style={styles.row}>
                    <TextInput
                      label="Status"
                      style={styles.input}
                      value={cards.input7}
                      onChangeText={(text) =>
                        handleInputChange(index, "input7", text)
                      }
                    />
                    <TextInput
                      label="Media"
                      style={styles.input}
                      value={cards.input8}
                      onChangeText={(text) =>
                        handleInputChange(index, "input8", text)
                      }
                    />
                  </View>
                  <Button
                    mode="outlined"
                    onPress={() => removeCard(index)}
                    style={styles.removeButton}
                  >
                    Remove
                  </Button>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
              inverted
            />
          </ScrollView>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
    marginRight:20,
    marginLeft:20
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    flex: 1,
    marginRight: 10,
  },
  addButton: {
    marginTop: 25,
    
    alignSelf: "flex-end",
  },
  cardCount: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
    marginLeft: 8,
    marginTop: 20,
  },
  card: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  deleteButton: {
    marginTop: 10,
  },
});

export default SetUnits;
