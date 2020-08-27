import React from "react";
import { View, Text, StyleSheet } from "react-native";
import generalStyles from "../../components/styles/styles";
import NoItemFound from "../../components/NoItemFound/NoItemFound";

export default function Calls() {
  return (
    <View style={[generalStyles.container, styles.callsContainer]}>
      <NoItemFound />
    </View>
  );
}

const styles = StyleSheet.create({
  callsContainer: {
    borderTopWidth: 1,
    borderTopColor: "#656a7b",
  },
  contentContainer: {
    paddingTop: 0,
    paddingBottom: 0,
  },
});
