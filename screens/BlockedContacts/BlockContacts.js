import React from "react";
import { View } from "react-native";
import generalStyles from "../../components/styles/styles";
import NoItemFound from "../../components/NoItemFound/NoItemFound";

export default function BlockContacts() {
  return (
    <View style={generalStyles.container}>
      <NoItemFound />
    </View>
  );
}
