import React, { useState } from "react";
import { ImageBackground, View, StyleSheet, ScrollView } from "react-native";
import {
  TextInput,
  Button,
  Card,
  Title,
  ToggleButton,
  Paragraph,
} from "react-native-paper";

const SetDocuments = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    input1: false,
    input2: false,
    input3: false,
    input4: "",
    input5: "",
    input6: "",
    input7: "",
    input8: "",
    input9: "",
  });

  const handleInputChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
  };
  const handleFileSelection = async (inputName) => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      handleInputChange(inputName, res.uri);
    } catch (err) {
      if (!DocumentPicker.isCancel(err)) {
        console.log("Error selecting file:", err);
      }
    }
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
            {/* <Title style={styles.title}>Form Title</Title> */}
            <View style={styles.inputContainer}>
              <View style={styles.row}>
                <Paragraph style={styles.inputTitle}>Lease Guarantee</Paragraph>
                <View style={styles.toggleContainer}>
                  <ToggleButton
                    icon="check"
                    value="yes"
                    status={inputs.input1 ? "checked" : "unchecked"}
                    onPress={() => handleInputChange("input1", !inputs.input1)}
                    style={styles.toggleButton}
                  >
                    Yes
                  </ToggleButton>
                  <ToggleButton
                    icon="close"
                    value="no"
                    status={inputs.input1 ? "unchecked" : "checked"}
                    onPress={() => handleInputChange("input1", !inputs.input1)}
                    style={styles.toggleButton}
                  >
                    No
                  </ToggleButton>
                </View>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.row}>
                <Paragraph style={styles.inputTitle}>First and Last</Paragraph>
                <View style={styles.toggleContainer}>
                  <ToggleButton
                    icon="check"
                    value="yes"
                    status={inputs.input2 ? "checked" : "unchecked"}
                    onPress={() => handleInputChange("input2", !inputs.input2)}
                    style={styles.toggleButton}
                  >
                    Yes
                  </ToggleButton>
                  <ToggleButton
                    icon="close"
                    value="no"
                    status={inputs.input2 ? "unchecked" : "checked"}
                    onPress={() => handleInputChange("input2", !inputs.input2)}
                    style={styles.toggleButton}
                  >
                    No
                  </ToggleButton>
                </View>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.row}>
                <Paragraph style={styles.inputTitle}>HOA</Paragraph>
                <View style={styles.toggleContainer}>
                  <ToggleButton
                    icon="check"
                    value="yes"
                    status={inputs.input3 ? "checked" : "unchecked"}
                    onPress={() => handleInputChange("input3", !inputs.input3)}
                    style={styles.toggleButton}
                  >
                    Yes
                  </ToggleButton>
                  <ToggleButton
                    icon="close"
                    value="no"
                    status={inputs.input3 ? "unchecked" : "checked"}
                    onPress={() => handleInputChange("input3", !inputs.input3)}
                    style={styles.toggleButton}
                  >
                    No
                  </ToggleButton>
                </View>
              </View>
            </View>
            <TextInput
              label="Deposit Amount"
              value={inputs.input4}
              onChangeText={(text) => handleInputChange("input4", text)}
              style={styles.input}
            />
            <TextInput
              label="Credit Score Minimum"
              value={inputs.input5}
              onChangeText={(text) => handleInputChange("input5", text)}
              style={styles.input}
            />
            <TextInput
              label="Rent X Times"
              value={inputs.input6}
              onChangeText={(text) => handleInputChange("input6", text)}
              style={styles.input}
            />
           <View style={styles.inputContainer}>
          <View style={styles.row}>
            <Paragraph style={styles.inputTitle}>Lease Policy</Paragraph>
            <Button onPress={() => handleFileSelection('input7')}>Select Document</Button>
          </View>
          {/* <TextInput
            label="Selected Document"
            value={inputs.input7}
            editable={false}
            style={styles.input}
          /> */}
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.row}>
            <Paragraph style={styles.inputTitle}>Application</Paragraph>
            <Button onPress={() => handleFileSelection('input8')}>Select Document</Button>
          </View>
          {/* <TextInput
            label="Selected Document"
            value={inputs.input8}
            editable={false}
            style={styles.input}
          /> */}
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.row}>
            <Paragraph style={styles.inputTitle}>Other</Paragraph>
            <Button onPress={() => handleFileSelection('input9')}>Select Document</Button>
          </View>
          {/* <TextInput
            label="Selected Document"
            value={inputs.input9}
            editable={false}
            style={styles.input}
          /> */}
        </View>
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
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom:50,
    paddingTop:25
  },
  scrollContainer: {
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputTitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    marginBottom: 32,
  },
  toggleButton: {
    marginRight: 8,
  },
  // submitButton: {
  //   marginTop: 16,
  // },
});

export default SetDocuments;
