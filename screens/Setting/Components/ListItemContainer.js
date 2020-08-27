import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ListItem from "./ListItem";

export default function ListItemContainer(props) {
  return (
    <View style={styles.listItemsContainer}>
      <ListItem
        name="Profile"
        onPress={() => {
          props.navigation.navigate("Profile");
        }}
      />
      <ListItem
        name="Change Password"
        onPress={() => {
          props.navigation.navigate("ChangePassword");
        }}
      />
      <ListItem
        name="Blocked Contacts"
        onPress={() => {
          props.navigation.navigate("BlockedContacts");
        }}
      />
      <ListItem name="Terms & Condition" />
      <ListItem name="Privacy Policy" />
      <ListItem
        name="Contact us"
        onPress={() => {
          props.navigation.navigate("ContactUs");
        }}
      />
      <ListItem name="About us" />
      <ListItem name="Logout" />
    </View>
  );
}

const styles = StyleSheet.create({
  listItemsContainer: {
    paddingHorizontal: 30,
  },
  listItem: {
    paddingBottom: 20,
    paddingTop: 20,
    paddingRight: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#656a7b",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listItemText: {
    color: "#B9BAC2",
    fontSize: 24,
  },
});
