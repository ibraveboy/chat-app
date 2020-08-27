import React from "react";
import { View, Text } from "react-native";
import generalStyles from "../../../../components/styles/styles";
import NoItemFound from "../../../../components/NoItemFound/NoItemFound";

export default function AllTab() {
  return (
    <View style={generalStyles.container}>
      <NoItemFound />
    </View>
  );
}
