import React, { useState, useEffect } from 'react';
import {
  ImageBackground,
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import Slide from './components/Slide';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import generalStyles from '../../components/styles/styles';
import { connectReducer } from '../../utils';
import { initQuickBlox } from '../../actions';

const backgrounImage = require('../../assets/images/welcome_bg.png');
const iconForSlides = require('../../assets/images/info.png');
let _carousel = null;

const _renderItem = ({ item, index }) => {
  return <Slide {...item} />;
};
function Welcome(props) {
  const [slidesProps, setSlidesProps] = useState([
    {
      icon: iconForSlides,
      title: 'Welcome Wictalk',
      description:
        "Wictalk is a messaging and calling app that allows you to easily connect with friends across countries. It's the all-in-one communitcation app (SMS/MMS), voice and video calls ",
    },
    {
      icon: iconForSlides,
      title: 'Welcome Wictalk',
      description:
        "Wictalk is a messaging and calling app that allows you to easily connect with friends across countries. It's the all-in-one communitcation app (SMS/MMS), voice and video calls ",
    },
    {
      icon: iconForSlides,
      title: 'Welcome Wictalk',
      description:
        "Wictalk is a messaging and calling app that allows you to easily connect with friends across countries. It's the all-in-one communitcation app (SMS/MMS), voice and video calls ",
    },
  ]);
  const [activeSlide, setActiveSlide] = useState(0);

  // useEffect(() => {
    // props.initQuickBlox();
  // }, []);

  return (
    <ImageBackground
      resizeMethod='resize'
      resizeMode='stretch'
      source={backgrounImage}
      style={[generalStyles.container, styles.screenContainer]}
    >
      <View style={{ flex: 0.6 }}>
        <Carousel
          ref={(_crsl) => {
            _carousel = _crsl;
          }}
          data={slidesProps}
          renderItem={_renderItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width}
          indicatorStyle='white'
          onSnapToItem={(index) => {
            setActiveSlide(index);
          }}
        />
        <Pagination
          dotsLength={slidesProps.length}
          activeDotIndex={activeSlide}
          dotStyle={{
            backgroundColor: 'white',
          }}
        />
      </View>
      <View
        style={{ flex: 0.4, justifyContent: 'flex-end', alignItems: 'center' }}
      >
        {props.quickBloxError !== "" ? (
          <View style={[styles.buttonsContainer,styles.buttonLoader]}>
            <TouchableOpacity style={[styles.button,styles.loader]}>
              <Text style={generalStyles.buttonText}>Try Again?</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <React.Fragment>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  props.navigation.navigate('Login');
                }}
              >
                <Text style={generalStyles.buttonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  props.navigation.navigate('SignUp');
                }}
              >
                <Text style={generalStyles.buttonText}>Register</Text>
              </TouchableOpacity>
            </View>
          </React.Fragment>
        )}
        {
          props.quickBloxError !== "" && (
            <View>
              <Text style={styles.textDanger}>
                Something went wrong.
              </Text>
            </View>
          )
        }
      </View>
    </ImageBackground>
  );
}

export default connectReducer(Welcome, { initQuickBlox });

const styles = StyleSheet.create({
  screenContainer: {
    minHeight: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
  },
  imageContainer: {
    paddingTop: 100,
    paddingBottom: 50,
  },
  buttonsContainer: {
    borderRadius: 50,
    overflow: 'hidden',
    height: 60,
    width: '80%',
    flexDirection: 'row',
    marginBottom: 50,
  },
  button: {
    flex: 0.5,
    height: 60,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  buttonLoader:{
    flexDirection:"column"
  },
  loader:{
    flex:1,
  },
  textDanger:{
    color:"red",
    fontSize:12,
    textAlign:"center"
  }
});
