import React from "react";
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import generalStyles from "../../components/styles/styles";
import LoginForm from "./components/LoginForm/LoginForm";
import {connectReducer} from "../../utils"
import { loginUser, inputTextChange } from "../../actions";

const backgroundImage = require("../../assets/images/bk.png");

function Login(props) {
  return (
    <ImageBackground
      resizeMethod="resize"
      resizeMode="cover"
      source={backgroundImage}
      style={generalStyles.container}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <ScrollView keyboardShouldPersistTaps="handled">
          <LoginForm {...props} />
        </ScrollView>
      </View>
      <View style={generalStyles.footerContainer}>
        <View>
          <Text style={generalStyles.buttonText}>Don't have an account ?</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("SignUp");
          }}
        >
          <Text style={generalStyles.linkText}>Sign Up Now</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default connectReducer(Login,{loginUser,inputTextChange})