import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";
import Login from "../screens/Login/Login";
import SignUp from "../screens/SignUp/SignUp";
import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import Profile from "../screens/Profile/Profile";
import ChangePassword from "../screens/ChangePassword/ChangePassword";
import ContactUs from "../screens/ContactUs/ContactUs";
import BlockContacts from "../screens/BlockedContacts/BlockContacts";
import Welcome from "../screens/Welcome/Welcome";

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      {/* <Stack.Screen name="Notifications" component={Notifications} /> */}
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          headerTitleStyle: { color: "white", fontSize: 35 },
          headerTitleAlign: "center",
          header: () => {
            return getHeader();
          },
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: () => {
            return getHeader();
          },
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          header: () => {
            return getHeader();
          },
        }}
      />
      <Stack.Screen
        name="BlockedContacts"
        component={BlockContacts}
        options={{
          header: () => {
            return getHeader();
          },
        }}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;

function getHeader() {
  return <NavigationHeader />;
}
