import React from "react";
import { View, Text, StyleSheet } from "react-native";
import generalStyles from "../../components/styles/styles";
import Search from "../../components/Search/Search";

export default function Contacts() {
  return (
    <View style={generalStyles.container}>
      <View style={[generalStyles.contentContainer, styles.contentContainer]}>
        <Search />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 0,
    paddingBottom: 0,
  },
});
