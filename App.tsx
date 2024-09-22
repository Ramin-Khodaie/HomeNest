/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Splash from './src/screens/auth/Splash';
import SignIn from './src/screens/auth/Signin';
import SignUp from './src/screens/auth/Signup';
import Home from './src/screens/app/Home';
import {colors} from './src/utils/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Bookmarks from './src/screens/app/Bookmarks';
import Profile from './src/screens/app/Profile';
import {AuthProvider, useAuth} from './src/context/auth';

Ionicons.loadFont();

export type AuthStackParamList = {
  Splash: {};
  SignIn: {onSignIn?: () => void};
  SignUp: {onSignIn?: () => void};
};

export type AppStackParamList = {
  Home: {};
  Bookmark: {};
  Profile: {};
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const AppStack = createNativeStackNavigator<AuthStackParamList>();

const Tab = createBottomTabNavigator<AppStackParamList>();

function App(): React.JSX.Element {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    setIsSignedIn(true);
  };
  const theme = {
    ...DefaultTheme,
    colors: {
      background: colors.white,
      primary: '',
      card: '',
      text: '',
      border: '',
      notification: '',
    },
  };

  return (
    <AuthProvider>
      <NavigationContainer theme={theme}>
        {isSignedIn ? (
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName = '';
                if (route.name === 'Home') {
                  iconName = focused ? 'home' : 'home-outline';
                }
                if (route.name === 'Bookmark') {
                  iconName = focused ? 'bookmark' : 'bookmark-outline';
                }
                if (route.name === 'Profile') {
                  iconName = focused
                    ? 'person-circle'
                    : 'person-circle-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Bookmark" component={Bookmarks} />
            <Tab.Screen name="Profile" component={Profile} />
          </Tab.Navigator>
        ) : (
          <AuthStack.Navigator
            initialRouteName="Splash"
            screenOptions={{
              headerShown: false,
            }}>
            <AuthStack.Screen name={'Splash'} component={Splash} />
            <AuthStack.Screen
              name={'SignIn'}
              component={SignIn}
              initialParams={{onSignIn: handleSignIn}}
            />
            <AuthStack.Screen name={'SignUp'} component={SignUp} />
          </AuthStack.Navigator>
        )}
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
