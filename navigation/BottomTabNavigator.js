import * as React from "react";
import Chats from "../screens/Chats/Chats";
import Calls from "../screens/Calls/Calls";
import Setting from "../screens/Setting/Setting";
import TabBarIcon from "../components/TabBarIcon";
import Contacts from "../screens/Contacts/Contacts";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const INITIAL_ROUTE_NAME = "Chats";
const BottomTab = createBottomTabNavigator();
const CHATS_ICON = require("../assets/images/tabBar/chat.imageset/chat.png");
const CHATS_ICON_ACTIVE = require("../assets/images/tabBar/chat_blue.imageset/chat_blue.png");
const CONTACTS_ICON = require("../assets/images/tabBar/contacts.imageset/contacts.png");
const CONTACTS_ICON_ACTIVE = require("../assets/images/tabBar/contacts_blue.imageset/contacts_blue.png");
const CALL_ICON = require("../assets/images/tabBar/call.imageset/call.png");
const CALL_ICON_ACTIVE = require("../assets/images/tabBar/call_blue.imageset/call_blue.png");
const SETTINGS_ICON = require("../assets/images/tabBar/settings.imageset/settings.png");
const SETTINGS_ICON_ACTIVE = require("../assets/images/tabBar/settings_blue.imageset/settings_blue.png");

export default function BottomTabNavigator() {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        style: {
          backgroundColor: "#0F131F",
          paddingTop: 10,
          height: 65,
          borderTopWidth: 0,
        },
        activeTintColor: "#5258b0",
        inactiveTintColor: "white",
        labelStyle: {
          fontSize: 14,
        },
        keyboardHidesTabBar: true,
      }}
    >
      <BottomTab.Screen
        name="Chats"
        component={Chats}
        options={{
          title: "Chats",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon source={focused ? CHATS_ICON_ACTIVE : CHATS_ICON} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          title: "Contacts",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              source={focused ? CONTACTS_ICON_ACTIVE : CONTACTS_ICON}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Calls"
        component={Calls}
        options={{
          title: "Calls",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon source={focused ? CALL_ICON_ACTIVE : CALL_ICON} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Setting"
        component={Setting}
        options={{
          title: "Setting",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              source={focused ? SETTINGS_ICON_ACTIVE : SETTINGS_ICON}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
