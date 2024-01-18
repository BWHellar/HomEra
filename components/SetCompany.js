import React, { useState } from "react";
import { ImageBackground, View, StyleSheet, ScrollView } from "react-native";
import { TextInput, Button, Card, Title } from "react-native-paper";

const SetCompany = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    input7: "",
  });
  const handleInputChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = () => {
    // Handle form submission
  };
  return (
    <>
      <ImageBackground
        source={require("../images/gradient.png")}
        style={styles.background}
      >
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Card style={styles.card}>
              <Card.Content>
              <Title style={styles.cardTitle}>Connect Vendors</Title>
                <View style={styles.buttonContainer}>
                  <Button
                    mode="contained"
                    onPress={() => console.log("Button 2 pressed")}
                  >
                    Custom
                  </Button>
                  <Button
                    mode="contained"
                    onPress={() => console.log("Button 1 pressed")}
                  >
                    Procurify
                  </Button>
                  <Button
                    mode="contained"
                    onPress={() => console.log("Button 3 pressed")}
                  >
                    Onspring
                  </Button>
                </View>
              </Card.Content>
            </Card>
            <TextInput
              label="Company Name"
              value={inputs.input1}
              onChangeText={(text) => handleInputChange("input1", text)}
              style={styles.input}
            />
            <TextInput
              label="Address"
              value={inputs.input2}
              onChangeText={(text) => handleInputChange("input2", text)}
              style={styles.input}
            />
            <TextInput
              label="Company Phone"
              value={inputs.input3}
              onChangeText={(text) => handleInputChange("input3", text)}
              style={styles.input}
            />
            <TextInput
              label="Company Email"
              value={inputs.input4}
              onChangeText={(text) => handleInputChange("input4", text)}
              style={styles.input}
            />
            <TextInput
              label="Company Point of Contact"
              value={inputs.input5}
              onChangeText={(text) => handleInputChange("input5", text)}
              style={styles.input}
            />
            <TextInput
              label="Business ID"
              value={inputs.input6}
              onChangeText={(text) => handleInputChange("input6", text)}
              style={styles.input}
            />

          </ScrollView>
          <Button
            mode="contained"
            onPress={handleSubmit}
            style={styles.submitButton}
          >
            Submit
          </Button>
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
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 50,
    paddingTop: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  input: {
    marginBottom: 10,
  },
  submitButton: {
    marginVertical: 10,
  },
  card: {
    marginBottom: 10,
  },
  cardTitle: {
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  button: {
    flexBasis: '30%',
    marginBottom: 10,
  },
});

export default SetCompany;