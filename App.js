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
import {personGql} from "./graphql/person";
import {getClient} from "./components/requiredfiles/apollo";
import { PaperProvider } from "react-native-paper";
import { getAuthToken, TOKEN, MANAGER,PERSON_URL,LOCATIONAPI  } from "./constants";

import {
  signInWithEmailAndPassword,
  getIdTokenResult,
  getIdToken,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

import Cookie from "js-cookie";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(false);

  const firebaseConfig = {
    apiKey: "AIzaSyDA1wcz3xYK8r-wUWmUj_HGmqlrzIMjgus",
    authDomain: "leasera-production.firebaseapp.com",
    databaseURL: "https://leasera-production.firebaseio.com",
    projectId: "leasera-production",
    storageBucket: "leasera-production.appspot.com",
    messagingSenderId: "913859279590",
    appId: "1:913859279590:web:11b02c03a5b7f109ecd927",
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  useEffect(() => {
    initializeApp(firebaseConfig);
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
  const registerAuthToken = (token) => {
    Cookie.set(TOKEN, token, {
      domain: "leasera.com",
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
                  registerAuthToken(token);
                  Cookie.set(MANAGER, idTokenResult.claims.manager, {
                    domain: "leasera.com",
                  });
                  getPersonInfo()
                  setIsAuthenticated(true);
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
      console.log("Currrent user unavailable.");
    }
  };

  const unregisterAuthToken = () => {
    auth.signOut();
    Cookie.remove(TOKEN, {
      domain: "leasera.com",
    });
    Cookie.remove(MANAGER, {
      domain: "leasera.com",
    });
    if (Cookie.get("token") == undefined) {
      setIsAuthenticated(false);
    }
  };

  const getPersonInfo = () => {
    const newClient = getClient(PERSON_URL);
    console.log(JSON.stringify({personGql }));
    try {
      newClient
        .query({
          query: personGql,
        })
        .then((res) => {
          console.log(res);
          // const user = res.data.person.edges[0].node;
          setUser(user);
          // getMyProperties();
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
                }}
              />
            ) : (
              <>
                <Stack.Screen name="Home" component={HomePage} />
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
