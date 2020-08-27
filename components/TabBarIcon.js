import * as React from "react";
import { View, StyleSheet, Image } from "react-native";
import generalStyles from "./styles/styles";

export default function TabBarIcon(props) {
  return (
    <View style={styles.tabIconContainer}>
      <Image
        style={generalStyles.image}
        resizeMethod="resize"
        resizeMode="stretch"
        source={props.source}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tabIconContainer: {
    width: 40,
    height: 40,
  },
});
