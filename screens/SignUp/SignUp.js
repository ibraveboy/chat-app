import React from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import generalStyles from "../../components/styles/styles";
import SignUpForm from "./components/SignUpForm/SignUpForm";
const backgroundImage = require("../../assets/images/bk.png");
const cross = require("../../assets/images/cross.png");

export default function SignUp(props) {
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
        }}
      >
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={styles.closeButton}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.goBack();
              }}
              style={[
                generalStyles.formIconContainer,
                { borderRadius: 0, marginRight: 0 },
              ]}
            >
              <Image
                source={cross}
                resizeMethod="resize"
                resizeMode="stretch"
                style={generalStyles.image}
              />
            </TouchableOpacity>
          </View>
          <SignUpForm />
        </ScrollView>
      </View>
      <View style={generalStyles.footerContainer}>
        <View>
          <Text style={generalStyles.buttonText}>Already have account ?</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <Text style={generalStyles.linkText}>Log In Now</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    position: "relative",
    top: 60,
    left: 20,
  },
});
