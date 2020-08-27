import React from "react";
import { View, Text, ScrollView } from "react-native";
import generalStyles from "../../components/styles/styles";
import ProfileImage from "./components/ProfileImage";
import ProfileDetails from "./components/ProfileDetails";

export default function Profile() {
  return (
    <View style={generalStyles.container}>
      <ScrollView>
        <ProfileImage />
        <ProfileDetails />
      </ScrollView>
    </View>
  );
}
