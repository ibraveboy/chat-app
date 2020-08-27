import React from "react";
import { Ionicons as Icon } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ListItem(props) {
  return (
    <TouchableOpacity style={{ width: "100%" }} onPress={props.onPress}>
      <View style={styles.listItem}>
        <View>
          <Text style={styles.listItemText}>{props.name}</Text>
        </View>
        <View>
          <Icon name="ios-arrow-forward" style={styles.listItemText} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    paddingBottom: 25,
    paddingTop: 25,
    paddingRight: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#656a7b",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listItemText: {
    color: "#B9BAC2",
    fontSize: 20,
  },
});
