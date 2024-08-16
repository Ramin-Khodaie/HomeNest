/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Splash from './src/screens/auth/Splash';
import SignUp from './src/screens/auth/Signup';
import SignIn from './src/screens/auth/Signin';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Splash: {};
  SignIn: {};
  SignUp: {};
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="SignIn">
        <RootStack.Screen
          name="Splash"
          component={Splash}
          options={{title: ''}}
        />
        <RootStack.Screen name="SignUp" component={SignUp} />
        <RootStack.Screen name="SignIn" component={SignIn} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
