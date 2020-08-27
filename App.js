import * as React from 'react';
import reducer from './reducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import useCachedResources from './hooks/useCachedResources';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './navigation/MainStackNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import thunk from 'redux-thunk';

const store = createStore(reducer,applyMiddleware(thunk));

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <View style={styles.container}>
            <NavigationContainer>
              <MainStackNavigator />
            </NavigationContainer>
          </View>
        </SafeAreaProvider>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
