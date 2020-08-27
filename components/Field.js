import React from "react";
import PropTypes from "prop-types";
import generalStyles from "./styles/styles";
import { View, Image, TextInput } from "react-native";

export default function Field(props) {
  return (
    <View style={generalStyles.formControl}>
      {props.source && (
        <View style={[generalStyles.formIconContainer, { borderWidth: 0 }]}>
          <Image
            resizeMode="contain"
            resizeMethod="resize"
            source={props.source}
            style={generalStyles.image}
          />
        </View>
      )}
      <TextInput
        value={props.value}
        multiline={props.multiline}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry ? true : false}
        style={[
          generalStyles.formInput,
          props.multiline ? generalStyles.multilineInput : null,
        ]}
        placeholder={props.placeholder}
        placeholderTextColor="#656a7b"
      />
    </View>
  );
}

Field.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  source: PropTypes.any,
  multiline: PropTypes.bool.isRequired,
  secureTextEntry: PropTypes.bool,
};
