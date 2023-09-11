import React from "react";
import {
  ImageBackground,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const ProfileHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require("../images/LoginBackground.jpg")}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Your Name</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <Icon name="gear" size={24} color="#333" style={styles.icon} />
          <Text style={styles.infoText}>Phone Number: 123-456-7890</Text>
        </View>
        <View style={styles.row}>
          <Icon name="gear" size={24} color="#333" style={styles.icon} />
          <Text style={styles.infoText}>Email: example@example.com</Text>
        </View>
        <View style={styles.row}>
          <Icon name="gear" size={24} color="#333" style={styles.icon} />
          <Text style={styles.infoText}>
            Address: 123 Street, City, State, ZIP
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="gear" size={24} color="#333" style={styles.icon} />
          <Text style={styles.infoText}>Password: ********</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
    marginTop: -125,
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
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingHorizontal: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginBottom:20
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
