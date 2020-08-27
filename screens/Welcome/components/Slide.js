import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import generalStyles from '../../../components/styles/styles';

const Slide = (props) => {
  return (
    <View style={styles.screenContainer}>
      <View>
        <Image
          style={styles.slideIcon}
          source={props.icon}
          resizeMethod='resize'
          resizeMode='contain'
        />
      </View>
      <View>
          <Text style={styles.slideTitle}>
              {props.title}
          </Text>
      </View>
      <View>
          <Text style={[generalStyles.buttonText,{marginHorizontal:30,textAlign:"center"}]}>
              {props.description}
          </Text>
      </View>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  screenContainer: {
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: 'center',
  },
  slideIcon: {
    width: 120,
    height: 120,
  },
  slideTitle:{
      color:"white",
      fontSize:38,
      marginBottom:40
  },
});
