import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import generalStyles from "../../../../components/styles/styles";

const pass = require("../../../../assets/images/password.png");

export default function ChangePasswordForm() {
  return (
    <View style={generalStyles.contentContainer}>
      <View>
        <Text style={generalStyles.title}>Change Password</Text>
      </View>
      <View style={generalStyles.formContainer}>
        <View style={generalStyles.formControl}>
          <View style={[generalStyles.formIconContainer, { borderWidth: 0 }]}>
            <Image
              resizeMode="cover"
              resizeMethod="resize"
              source={pass}
              style={generalStyles.image}
            />
          </View>
          <TextInput
            secureTextEntry={true}
            style={generalStyles.formInput}
            placeholder="Old Password"
            placeholderTextColor="#656a7b"
          />
        </View>
        <View style={generalStyles.formControl}>
          <View style={[generalStyles.formIconContainer, { borderWidth: 0 }]}>
            <Image
              resizeMode="cover"
              resizeMethod="resize"
              source={pass}
              style={generalStyles.image}
            />
          </View>
          <TextInput
            secureTextEntry={true}
            style={generalStyles.formInput}
            placeholder="New Password"
            placeholderTextColor="#656a7b"
          />
        </View>
        <View style={generalStyles.formControl}>
          <View style={[generalStyles.formIconContainer, { borderWidth: 0 }]}>
            <Image
              resizeMode="cover"
              resizeMethod="resize"
              source={pass}
              style={generalStyles.image}
            />
          </View>
          <TextInput
            secureTextEntry={true}
            style={generalStyles.formInput}
            placeholder="Confirm Password"
            placeholderTextColor="#656a7b"
          />
        </View>

        <View
          style={[
            generalStyles.formControl,
            { borderBottomWidth: 0, justifyContent: "center", marginTop: 30 },
          ]}
        >
          <TouchableOpacity style={generalStyles.formButton}>
            <Text style={generalStyles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
