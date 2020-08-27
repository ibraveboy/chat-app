import React from "react";
import { View, ScrollView } from "react-native";
import generalStyles from "../../components/styles/styles";
import ListItemContainer from "./Components/ListItemContainer";
import UserInfo from "./Components/UserInfo";

export default function Setting(props) {
  return (
    <View style={generalStyles.container}>
      <ScrollView>
        <UserInfo />
        <ListItemContainer {...props} />
      </ScrollView>
    </View>
  );
}
