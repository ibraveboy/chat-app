import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import generalStyles from "../styles/styles";

const searchIcon = require("../../assets/images/search.png");

export default function Search() {
  return (
    <View
      style={[
        generalStyles.formControl,
        generalStyles.noBorder,
        styles.searchContainer,
      ]}
    >
      <TouchableOpacity
        style={[generalStyles.formIconContainer, styles.iconContainer]}
      >
        <Image
          style={generalStyles.image}
          resizeMethod="resize"
          resizeMode="contain"
          source={searchIcon}
        />
      </TouchableOpacity>
      <TextInput
        style={[generalStyles.formInput]}
        placeholder="Search"
        placeholderTextColor="#656a7b"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    borderRadius: 10,
    backgroundColor: "#2B2F3B",
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 10,
  },
  iconContainer: {
    marginLeft: 15,
    height: 30,
    width: 30,
  },
});
