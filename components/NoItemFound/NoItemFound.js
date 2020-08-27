import React from "react";
import { View, Text } from "react-native";
import generalStyles from "../styles/styles";

export default function NoItemFound() {
  return (
    <View
      style={[
        generalStyles.container,
        { justifyContent: "center", alignItems: "center" },
      ]}
    >
      <Text style={generalStyles.buttonText}>No history found.</Text>
    </View>
  );
}
