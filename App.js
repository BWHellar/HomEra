import React, { useState } from "react";
import SignInPage from "./components/SignInPage";
import HomePage from "./components/HomePage";
import BottomNavigation from "./components/BottomNavigation";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountingHome from "./components/AccountingHome";
import ApplicationsHome from "./components/ApplicationsHome";
import LeadsHome from "./components/LeadsHome";
import LoyaltyHome from "./components/LoyaltyHome";
import MaintenanceHome from "./components/MaintenanceHome";
import MessagesHome from "./components/MessagesHome";
import PropertiesHome from "./components/PropertiesHome";
import ResidentsHome from "./components/ResidentsHome";
import ScheduleHome from "./components/ScheduleHome";
import SettingsHome from "./components/SettingsHome";
import ProfileHome from "./components/ProfileHome";

export default function App() {
  const Stack = createNativeStackNavigator();
  
  const firebaseConfig = {
    apiKey: "AIzaSyBSre-H4FbXm5YxyFNKAqLBO6w6dlEt37w",
    authDomain: "homera-29390.firebaseapp.com",
    projectId: "homera-29390",
    storageBucket: "homera-29390.appspot.com",
    messagingSenderId: "668234129560",
    appId: "1:668234129560:web:9179111d32308c46b070ed",
    measurementId: "G-EMY06VRLXE",
  };

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Sign In" component={SignInPage} />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Accounting" component={AccountingHome} />
          <Stack.Screen name="Applications" component={ApplicationsHome} />
          <Stack.Screen name="Leads" component={LeadsHome} />
          <Stack.Screen name="Loyalty" component={LoyaltyHome} />
          <Stack.Screen name="Maintenance" component={MaintenanceHome} />
          <Stack.Screen name="Messages" component={MessagesHome} />
          <Stack.Screen name="Properties" component={PropertiesHome} />
          <Stack.Screen name="Residents" component={ResidentsHome} />
          <Stack.Screen name="Schedule" component={ScheduleHome} />
          <Stack.Screen name="Settings" component={SettingsHome} />
          <Stack.Screen name="Profile" component={ProfileHome} />
        </Stack.Navigator>
      <BottomNavigation />
      </NavigationContainer>
    </>
  );
}
