import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Field from "../../../components/Field";

const userIcon = require("../../../assets/images/user.png");
const emailIcon = require("../../../assets/images/email.png");

export default function ProfileDetails() {
  const [username, setUsername] = useState("muneedahmed");
  const [fullname, setFullname] = useState("Muneeb Ahmed");
  const [email, setEmail] = useState("asifmuneed75@gmail.com");
  const [about, setAbout] = useState("");
  return (
    <View style={styles.contentContainer}>
      <Field
        source={userIcon}
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
      />
      <Field
        source={userIcon}
        value={fullname}
        onChangeText={setFullname}
        placeholder="Full Name"
      />
      <Field
        source={emailIcon}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <Field
        source={null}
        multiline={true}
        value={about}
        onChangeText={setAbout}
        placeholder="About"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 20,
  },
});
