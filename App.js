import React, { useState, useEffect } from "react";
import SignInPage from "./components/SignInPage";
import HomePage from "./components/HomePage";
import BottomNavigation from "./components/BottomNavigation";
import { NavigationContainer } from "@react-navigation/native";
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
import MaintenanceInfo from "./components/MaintenanceInfo";
import LeadInfo from "./components/LeadInfo";
import ApplicationsAdd from "./components/ApplicationsAdd";
import LeadAdd from "./components/LeadAdd";
import MaintenanceAdd from "./components/MaintenanceAdd";
import ScheduleAdd from "./components/ScheduleAdd";
import ProfileHome from "./components/ProfileHome";
import { personGql} from "./graphql/person";
import { configureGraphQL } from "./components/requiredfiles/apollo";
import { PaperProvider } from "react-native-paper";
import {
  PERSON_URL,
  setDataToAsyncStorage,
  getDataFromAsyncStorage,
} from "./constants";
import {
  signInWithEmailAndPassword,
  getIdTokenResult,
  getIdToken,
  getReactNativePersistence,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userLocations, setUserLocations] = useState([]);
  const [user, setUser] = useState(null);
  const [hasFetchedData, setHasFetchedData] = useState(false);
  const firebaseConfig = {
    apiKey: "AIzaSyDA1wcz3xYK8r-wUWmUj_HGmqlrzIMjgus",
    authDomain: "leasera-production.firebaseapp.com",
    databaseURL: "https://leasera-production.firebaseio.com",
    projectId: "leasera-production",
    storageBucket: "leasera-production.appspot.com",
    messagingSenderId: "913859279590",
    appId: "1:913859279590:web:11b02c03a5b7f109ecd927",
  };

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    auth.setPersistence(getReactNativePersistence(AsyncStorage));
  }, []);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDataFromAsyncStorage("TOKEN");
      setIsAuthenticated(data !== null);
  
      if (data !== null) {
        getPersonInfo();
        getMyProperties();
      }
    };
  
    fetchData();
  }, []);
  const loginAction = (username, password) => {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, username, password)
        .then(() => {
          getIdTokenResult(auth.currentUser)
            .then((idTokenResult) => {
              if (
                idTokenResult.claims.manager &&
                idTokenResult.claims.email_verified === true
              ) {
                onRequestSuccess(idTokenResult);
                resolve(true);
              } else {
                resolve(false);
              }
            })
            .catch((error) => {
              reject(error);
            });
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const onRequestSuccess = async () => {
    let authFlag = true;
    if (auth.currentUser) {
      getIdTokenResult(auth.currentUser)
        .then(async (idTokenResult) => {
          if (
            idTokenResult.claims.manager ||
            idTokenResult.claims.serviceProfessional
          ) {
            onAuthStateChanged(auth, async (user) => {
              if (authFlag) {
                authFlag = false;
                if (user) {
                  const token = await getIdToken(auth.currentUser, true);
                  setDataToAsyncStorage("TOKEN", token);
                  getPersonInfo();
                }
              }
            });
          }
        })
        .catch(() => {
          console.log("id token catch");
          return false;
        });
    } else {
      console.log("Current user unavailable.");
    }
  };

  const getPersonInfo = () => {
    const newClient = configureGraphQL(PERSON_URL);
    try {
      newClient
        .query({
          query: personGql,
        })
        .then((res) => {
          console.log(res);
          const user = res.data.person.edges[0].node;
          setDataToAsyncStorage("USER", JSON.stringify(user));
          return res;
        })
        .catch((e) => {
          console.log(e);
          return;
        });
    } catch (e) {
      console.log(e);
      return;
    }
  };

  

  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Sign In">
            {!isAuthenticated ? (
              <Stack.Screen
                name="Sign In"
                component={SignInPage}
                initialParams={{
                  loginAction: (username, password) =>
                    loginAction(username, password),
                  userLocations: userLocations,
                }}
              />
            ) : (
              <>
                <Stack.Screen
                  name="Home"
                  component={HomePage}
                  initialParams={{
                    userLocations: userLocations,
                  }}
                />
                <Stack.Screen name="Accounting" component={AccountingHome} />
                <Stack.Screen
                  name="Applications"
                  component={ApplicationsHome}
                />
                <Stack.Screen
                  name="Applications Add"
                  component={ApplicationsAdd}
                />
                <Stack.Screen
                  name="Maintenance Add"
                  component={MaintenanceAdd}
                />
                <Stack.Screen name="Lead Add" component={LeadAdd} />
                <Stack.Screen name="Lead Info" component={LeadInfo} />
                <Stack.Screen
                  name="Maintenance Info"
                  component={MaintenanceInfo}
                />
                <Stack.Screen name="Schedule Add" component={ScheduleAdd} />
                <Stack.Screen name="Leads" component={LeadsHome} />
                <Stack.Screen name="Loyalty" component={LoyaltyHome} />
                <Stack.Screen name="Maintenance" component={MaintenanceHome} />
                <Stack.Screen name="Messages" component={MessagesHome} />
                <Stack.Screen name="Properties" component={PropertiesHome} />
                <Stack.Screen name="Residents" component={ResidentsHome} />
                <Stack.Screen name="Schedule" component={ScheduleHome} />
                <Stack.Screen
                  name="Settings"
                  component={SettingsHome}
                  initialParams={{
                    logoutAction: () => unregisterAuthToken(),
                  }}
                />
                <Stack.Screen name="Profile" component={ProfileHome} />
              </>
            )}
          </Stack.Navigator>
          <BottomNavigation />
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}
