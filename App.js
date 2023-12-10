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
import PropertiesAdd from "./components/PropertiesAdd";
import ScheduleAdd from "./components/ScheduleAdd";
import ProfileHome from "./components/ProfileHome";
import SetUnits from "./components/SetUnits";
import SetMarketing from "./components/SetMarketing";
import SetDocuments from "./components/SetDocuments";
import SetProperty from "./components/SetProperty";
import SetCompany from "./components/SetCompany";
import SetFinancial from "./components/SetFinancial";
import SetStaff from "./components/SetStaff";
import SetMaintenance from "./components/SetMaintenance";
import SetOther from "./components/SetOther";
import { PaperProvider } from "react-native-paper";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [userLocations, setUserLocations] = useState([]);

  const authSet = () => {
    setIsAuthenticated(true);
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
                  setIsAuthenticated: () => authSet(),
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
                <Stack.Screen name="Properties Add" component={PropertiesAdd} />
                <Stack.Screen
                  name="Set Units"
                  component={SetUnits}
                />
                 <Stack.Screen
                  name="Set Marketing"
                  component={SetMarketing}
                />
                 <Stack.Screen
                  name="Set Documents"
                  component={SetDocuments}
                />
                 <Stack.Screen
                  name="Set Property"
                  component={SetProperty}
                />
                 <Stack.Screen
                  name="Set Company"
                  component={SetCompany}
                />
                 <Stack.Screen
                  name="Set Financial"
                  component={SetFinancial}
                />
                 <Stack.Screen
                  name="Set Staff"
                  component={SetStaff}
                />
                 <Stack.Screen
                  name="Set Maintenance"
                  component={SetMaintenance}
                />
                 <Stack.Screen
                  name="Set Other"
                  component={SetOther}
                />
               
           
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
