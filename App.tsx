/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthProvider} from './src/context/auth';
import {AppStack} from './src/stacks/app-stack';

Ionicons.loadFont();

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <AppStack />
    </AuthProvider>
  );
}

export default App;
