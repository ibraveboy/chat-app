import React, { useState } from "react";
import { withNavigation } from "@react-navigation/compat";
import { useSafeArea } from "react-native-safe-area-context";
import generalStyles from "../../../components/styles/styles";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

const trash = require("../../../assets/images/delete.png");
const edit = require("../../../assets/images/edit_box.png");
const notification = require("../../../assets/images/notification.png");
const addUser = require("../../../assets/images/user_add.png");
const call = require("../../../assets/images/call_blue.png");
const back = require("../../../assets/images/back.png");
const save = require("../../../assets/images/right.png");

function NavigationHeader({ navigation }) {
  const [currentActiveTab, setCurrentActiveTab] = useState("all");
  console.disableYellowBox = true;
  const insets = useSafeArea();
  let routeName = "Chats";
  if (navigation.state.routes) {
    routeName =
      navigation?.state?.routes[navigation.state.index]?.name ?? "Chats";
  } else if (navigation.state.routeName != "Home") {
    routeName = navigation.state.routeName;
  }

  let routesData = {
    Chats: {
      title: "Chat",
      leftIcon: trash,
      rightIcon: edit,
    },
    Contacts: {
      title: "Contact",
      leftIcon: notification,
      rightIcon: addUser,
    },
    Calls: {
      title: "Call",
      leftIcon: call,
      rightIcon: "Edit",
    },
    Setting: {
      title: "Settings",
      leftIcon: back,
      rightIcon: null,
    },
    Profile: {
      title: "Profile",
      leftIcon: back,
      rightIcon: save,
    },
    ContactUs: {
      title: "Contact Us",
      leftIcon: back,
      rightIcon: null,
    },
    BlockedContacts: {
      title: "Blocked Contacts",
      leftIcon: back,
      rightIcon: null,
    },
  };
  return (
    <View
      style={[
        styles.headerContainer,
        {
          paddingTop:
            routeName == "Setting" || navigation.state.routeName != "Home"
              ? insets.top + 10
              : insets.top + 20,
          paddingBottom: routeName == "Calls" ? 20 : 10,
        },
        routeName == "Setting" || navigation.state.routeName != "Home"
          ? styles.settingStyle
          : null,
      ]}
    >
      <View style={styles.headerLeft}>
        <TouchableOpacity style={styles.headerLeft}>
          <Image
            style={generalStyles.image}
            source={routesData[routeName].leftIcon}
            resizeMode="contain"
            resizeMethod="resize"
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.headerCenter, styles.headerChildCenter]}>
        {routeName == "Calls" ? (
          <View
            style={{
              flexDirection: "row",
              overflow: "hidden",
              borderRadius: 5,
            }}
            key="headerTabs"
          >
            <TouchableOpacity
              style={[
                styles.tabItems,
                currentActiveTab == "all" ? styles.activeTabItem : null,
              ]}
              onPress={() => {
                setCurrentActiveTab("all");
              }}
            >
              <Text
                style={[
                  styles.tabItemText,
                  currentActiveTab == "all" ? styles.activeTabItemText : null,
                ]}
              >
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tabItems,
                currentActiveTab == "missed" ? styles.activeTabItem : null,
              ]}
              onPress={() => {
                setCurrentActiveTab("missed");
              }}
            >
              <Text
                style={[
                  styles.tabItemText,
                  currentActiveTab == "missed"
                    ? styles.activeTabItemText
                    : null,
                ]}
              >
                Missed
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text
            style={[generalStyles.title, styles.headerTitle]}
            key="headerTitle"
          >
            {routesData[routeName].title}
          </Text>
        )}
      </View>
      <View>
        <TouchableOpacity
          style={
            typeof routesData[routeName].rightIcon == "string"
              ? null
              : styles.headerRight
          }
        >
          <Image
            key="headerImageOnRight"
            style={[
              generalStyles.image,
              {
                display:
                  typeof routesData[routeName].rightIcon == "string"
                    ? "none"
                    : "flex",
              },
            ]}
            source={routesData[routeName].rightIcon}
            resizeMode="contain"
            resizeMethod="resize"
          />
          <Text
            style={[
              generalStyles.buttonText,
              {
                display:
                  typeof routesData[routeName].rightIcon == "string"
                    ? "flex"
                    : "none",
              },
            ]}
          >
            {routesData[routeName].rightIcon}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#212330",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  headerLeft: {
    height: 30,
    width: 30,
  },
  headerRight: {
    width: 30,
    height: 30,
  },
  headerCenter: {
    flex: 1,
  },
  headerChildCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    marginVertical: 0,
    paddingVertical: 0,
    fontSize: 30,
  },
  tabItems: {
    backgroundColor: "white",
    width: 80,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  tabItemText: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
  },
  activeTabItem: {
    backgroundColor: "#6583f6",
  },
  activeTabItemText: {
    color: "white",
  },
  settingStyle: {
    backgroundColor: "#6A69EB",
  },
});

export default withNavigation(NavigationHeader);
