import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import generalStyles from '../../../../components/styles/styles';
const user = require('../../../../assets/images/user.png');
const pass = require('../../../../assets/images/password.png');

export default function LoginForm(props) {
  const changeTextHandler = (text, name) => {
    props.inputTextChange(name, text);
  };
  return (
    <View style={generalStyles.contentContainer}>
      <View>
        <Text style={generalStyles.title}>Login using Email</Text>
      </View>
      <View style={generalStyles.formContainer}>
        <View style={generalStyles.formControl}>
          <View style={generalStyles.formIconContainer}>
            <Image
              resizeMode='cover'
              resizeMethod='resize'
              source={user}
              style={generalStyles.image}
            />
          </View>
          <TextInput
            style={generalStyles.formInput}
            placeholder='Email or Username'
            placeholderTextColor='#656a7b'
            onChangeText={(text) => changeTextHandler(text, 'email')}
          />
        </View>
        <View style={generalStyles.formControl}>
          <View style={[generalStyles.formIconContainer, { borderWidth: 0 }]}>
            <Image
              resizeMode='cover'
              resizeMethod='resize'
              source={pass}
              style={generalStyles.image}
            />
          </View>
          <TextInput
            secureTextEntry={true}
            style={generalStyles.formInput}
            placeholder='Password'
            placeholderTextColor='#656a7b'
            onChangeText={(text) => changeTextHandler(text, 'password')}
          />
        </View>
        <View
          style={[
            generalStyles.formControl,
            { borderBottomWidth: 0, justifyContent: 'flex-end' },
          ]}
        >
          <TouchableOpacity>
            <Text style={[{ color: '#bfc2c8', fontSize: 18 }]}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            generalStyles.formControl,
            { borderBottomWidth: 0, justifyContent: 'center' },
          ]}
        >
          <TouchableOpacity
            style={generalStyles.formButton}
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          >
            <Text style={generalStyles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
