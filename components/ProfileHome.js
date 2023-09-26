import React from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
} from "react-native";
import {
  Avatar,
  Card,
  IconButton,
  Button,
  Portal,
  Text,
  TextInput,
  Modal,
} from "react-native-paper";


const ProfileHome = () => {
  const [visible, setVisible] = React.useState(false);
  const [reason, setReason] = React.useState("");
  const [data, setData] = React.useState({
    Name: "Mike Jones",
    Phone: "123-456-7890",
    Email: "example@example.com",
    Address: "123 Street, City, State, ZIP",
    Password: "password",
  });
  const [text, setText] = React.useState("");
  const showModal = (item) => {
    setReason(item);
    setVisible(true);
  };
  const updateItem = () => {
    setData(prevData => ({
      ...prevData,
      [reason]: text
    }));
    setVisible(false);
  }
  const hideModal = () => {
    setReason("");
    setVisible(false);
  };
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  };

  return (
    <ImageBackground
      source={require("../images/gradient.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Avatar.Image
            size={105}
            source={require("../images/LoginBackground.jpg")}
          />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.row}>
            <Card.Title
              title="Name"
              subtitle={data.Name}
              left={(props) => <Avatar.Icon {...props} icon="account" />}
              right={(props) => (
                <IconButton
                  {...props}
                  icon="dots-vertical"
                  onPress={() => {
                    showModal("Name");
                  }}
                />
              )}
            />
          </View>
          <View style={styles.row}>
            <Card.Title
              title="Phone Number"
              subtitle={data.Phone}
              left={(props) => <Avatar.Icon {...props} icon="phone" />}
              right={(props) => (
                <IconButton
                  {...props}
                  icon="dots-vertical"
                  onPress={() => {
                    showModal("Phone");
                  }}
                />
              )}
            />
          </View>
          <View style={styles.row}>
            <Card.Title
              title="Email"
              subtitle={data.Email}
              left={(props) => <Avatar.Icon {...props} icon="email" />}
              right={(props) => (
                <IconButton
                  {...props}
                  icon="dots-vertical"
                  onPress={() => {
                    showModal("Email");
                  }}
                />
              )}
            />
          </View>
          <View style={styles.row}>
            <Card.Title
              title="Address"
              subtitle={data.Address}
              left={(props) => <Avatar.Icon {...props} icon="home" />}
              right={(props) => (
                <IconButton
                  {...props}
                  icon="dots-vertical"
                  onPress={() => {
                    showModal("Address");
                  }}
                />
              )}
            />
          </View>
          <View style={styles.row}>
            <Card.Title
              title="Password"
              subtitle={data.Password}
              left={(props) => <Avatar.Icon {...props} icon="lock" />}
              right={(props) => (
                <IconButton
                  {...props}
                  icon="dots-vertical"
                  onPress={() => {
                    showModal("Password");
                  }}
                />
              )}
            />
          </View>
        </View>
      </View>

      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text variant="labelLarge">Change your {reason}</Text>
          <TextInput
            label={reason}
            value={text}
            onChangeText={(text) => setText(text)}
          />
          <Button onPress={() => updateItem()}>Update</Button>
        </Modal>
      </Portal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start", 
    marginTop: 0,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  infoContainer: {
    marginBottom: 0,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingHorizontal: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginBottom: 20,
  },
  infoText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#4287f5",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ProfileHome;
