import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import generalStyles from "../../../components/styles/styles";

const noUserImage = require("../../../assets/images/nouser.png");
const editIcon = require("../../../assets/images/edit.png");

export default function ProfileImage() {
  return (
    <View style={styles.profileImageContainer}>
      <TouchableOpacity>
        <View style={styles.imageCircle}>
          <Image
            style={generalStyles.image}
            source={noUserImage}
            resizeMethod="resize"
            resizeMode="contain"
          />
        </View>
        <View style={styles.iconCircle}>
          <Image
            source={editIcon}
            style={generalStyles.image}
            resizeMode="contain"
            resizeMethod="resize"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  profileImageContainer: {
    marginVertical: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  imageCircle: {
    borderRadius: 100,
    overflow: "hidden",
    width: 100,
    height: 100,
  },
  iconCircle: {
    borderRadius: 100,
    padding: 2,
    backgroundColor: "#6583f6",
    width: 20,
    height: 20,
    position: "absolute",
    top: 5,
    right: 5,
  },
});
