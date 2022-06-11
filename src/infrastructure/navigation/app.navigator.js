
import {React} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text, Button, StyleSheet } from "react-native";
import { AuthenticationContext } from "../../services/authentication.context";

import { FocusScreen } from "../../features/focus/screens/focus.screen"
import { SleepScreen } from "../../features/sleep/screens/sleep.screen"
import { MeditateScreen } from "../../features/meditate/screens/meditate.screen"
import { AccountScreen } from "../../features/account/screens/account.screen"



import { SafeArea } from "../../utility/safe-area.component";
import { MyTabs } from "../../features/tabs/screens/tab.screen";



const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Settings = () => (
  
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
  
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => {

  return (
  
  <SafeArea> 
    <MyTabs></MyTabs>
  </SafeArea>
    
    )
};

