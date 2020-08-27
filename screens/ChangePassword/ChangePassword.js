import React from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import generalStyles from "../../components/styles/styles";
import ChangePasswordForm from "./components/ChangePasswordForm/ChangePasswordForm";

const backgroundImage = require("../../assets/images/bk.png");
const cross = require("../../assets/images/cross.png");

export default function ChangePassword(props) {
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
          <ChangePasswordForm />
        </ScrollView>
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
