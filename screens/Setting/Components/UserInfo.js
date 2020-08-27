import React from "react";
import generalStyles from "../../../components/styles/styles";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const noUserImage = require("../../../assets/images/nouser.png");

export default function UserInfo() {
  return (
    <View style={styles.userInfoContainer}>
      <View style={styles.userProfileImageContainer}>
        <Image
          source={noUserImage}
          style={generalStyles.image}
          resizeMethod="resize"
          resizeMode="contain"
        />
      </View>
      <View style={{ flex: 1 }}>
        <View>
          <Text style={styles.userNameText}>muneebahmed</Text>
        </View>
        <View>
          <Text style={styles.emailText}>asifmuneed75@gmail.com</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.activeButon}>
          <Text style={styles.activeButtonText}>Active</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userInfoContainer: {
    paddingVertical: 20,
    paddingHorizontal: 5,
    marginHorizontal: 10,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#656a7b",
    alignItems: "center",
  },
  userProfileImageContainer: {
    borderRadius: 100,
    overflow: "hidden",
    marginRight: 10,
    width: 70,
    height: 70,
  },
  userNameText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  emailText: {
    color: "#5F616D",
    fontSize: 14,
  },
  activeButon: {
    borderRadius: 25,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#8AB461",
    width: 90,
    alignSelf: "flex-end",
  },
  activeButtonText: {
    color: "#5258b0",
    fontSize: 18,
    textAlign: "center",
  },
});
