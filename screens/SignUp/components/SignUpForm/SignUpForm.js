import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import generalStyles from "../../../../components/styles/styles";
const user = require("../../../../assets/images/user.png");
const pass = require("../../../../assets/images/password.png");
const email = require("../../../../assets/images/email.png");
const check = require("../../../../assets/images/ic_check.png");
const uncheck = require("../../../../assets/images/ic_uncheck.png");

export default function SignUpForm() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View style={generalStyles.contentContainer}>
      <View>
        <Text style={generalStyles.title}>Signup using Email</Text>
      </View>
      <View style={generalStyles.formContainer}>
        <View style={generalStyles.formControl}>
          <View style={generalStyles.formIconContainer}>
            <Image
              resizeMode="cover"
              resizeMethod="resize"
              source={user}
              style={generalStyles.image}
            />
          </View>
          <TextInput
            style={generalStyles.formInput}
            placeholder="Username"
            placeholderTextColor="#656a7b"
          />
        </View>
        <View style={generalStyles.formControl}>
          <View style={generalStyles.formIconContainer}>
            <Image
              resizeMode="cover"
              resizeMethod="resize"
              source={user}
              style={generalStyles.image}
            />
          </View>
          <TextInput
            style={generalStyles.formInput}
            placeholder="Full Name"
            placeholderTextColor="#656a7b"
          />
        </View>
        <View style={generalStyles.formControl}>
          <View
            style={[generalStyles.formIconContainer, generalStyles.noBorder]}
          >
            <Image
              resizeMode="contain"
              resizeMethod="resize"
              source={email}
              style={generalStyles.image}
            />
          </View>
          <TextInput
            style={generalStyles.formInput}
            placeholder="Email"
            placeholderTextColor="#656a7b"
          />
        </View>
        <View style={generalStyles.formControl}>
          <View
            style={[generalStyles.formIconContainer, generalStyles.noBorder]}
          >
            <Image
              resizeMode="contain"
              resizeMethod="resize"
              source={email}
              style={generalStyles.image}
            />
          </View>
          <TextInput
            style={generalStyles.formInput}
            placeholder="Select Country"
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
            placeholder="Password"
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
            generalStyles.footerContainer,
            generalStyles.formControl,
            { borderBottomWidth: 0, alignItems: "center" },
          ]}
        >
          <TouchableOpacity
            style={styles.checkBox}
            onPress={() => {
              setIsChecked(!isChecked);
            }}
          >
            <Image
              source={isChecked ? check : uncheck}
              resizeMode="contain"
              resizeMethod="resize"
              style={generalStyles.image}
            />
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <Text style={generalStyles.buttonText}>
              By signing up, you agree with the{" "}
              <Text style={generalStyles.linkText}>Terms & Conditions</Text> and{" "}
              <Text style={generalStyles.linkText}>Privacy Policy</Text>.
            </Text>
          </View>
        </View>
        <View
          style={[
            generalStyles.formControl,
            { borderBottomWidth: 0, justifyContent: "center" },
          ]}
        >
          <TouchableOpacity style={generalStyles.formButton}>
            <Text style={generalStyles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  checkBox: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
});
