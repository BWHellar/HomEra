import React, { useState, useRef, useEffect } from "react";
import DropDown from "react-native-paper-dropdown";
import {
  View,
  FlatList,
  TextInput,
  TouchableOpacity,ImageBackground,
  Text,
  StyleSheet,
} from "react-native";

const MessagesHome = () => {
  const [messages, setMessages] = useState([
    { text: "Hello!", sender: "bot" },
    { text: "Hi there!", sender: "user" },
    { text: "How are you?", sender: "user" },
    { text: "I'm good, thank you!", sender: "bot" },
  ]);
  const [user, setUser] = React.useState("");
  const [showDropDown, setShowDropDown] = React.useState(false);
  const [inputText, setInputText] = useState("");
  const flatListRef = useRef(null);
  useEffect(() => {
    flatListRef.current.scrollToEnd({ animated: true });
  }, [messages]);
  const handleSend = () => {
    if (inputText.trim() !== "") {
      setMessages([...messages, { text: inputText, sender: "user" }]);
      setInputText("");
    }
  };
  const unitList = [
    {
      label: "Bobby Joe",
      value: "Bobby Joe",
    },
    {
      label: "Bobby Jo",
      value: "Bobby Jo",
    },
    {
      label: "Bobby Jie",
      value: "Bobby Jie",
    },
  ];

  const renderItem = ({ item }) => (
    <View
      style={
        item.sender === "user"
          ? styles.userMessageContainer
          : styles.botMessageContainer
      }
    >
      <View
        style={item.sender === "user" ? styles.userMessage : styles.botMessage}
      >
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground
      source={require("../images/gradient.png")}
      style={styles.background}
    >
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 16 }}>
      <DropDown
        label={"User"}
        mode={"outlined"}
        visible={showDropDown}
        showDropDown={() => setShowDropDown(true)}
        onDismiss={() => setShowDropDown(false)}
        value={user}
        setValue={setUser}
        list={unitList}
        
      />
      </View>
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.messageList}
        onContentSizeChange={() =>
          flatListRef.current.scrollToEnd({ animated: true })
        }
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type your message"
          value={inputText}
          onChangeText={setInputText}
          multiline={true}
          numberOfLines={1}
          autoCorrect={false}
          enablesReturnKeyAutomatically={true}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  messageList: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  userMessageContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 8,
  },
  botMessageContainer: {
    flexDirection: "row",
    marginBottom: 8,
  },
  userMessage: {
    backgroundColor: "#DCF8C5",
    padding: 8,
    borderRadius: 12,
  },
  botMessage: {
    backgroundColor: "#E5E5EA",
    padding: 8,
    borderRadius: 12,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  textInput: {
    flex: 1,
    marginRight: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: "#007BFF",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sendButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MessagesHome;
