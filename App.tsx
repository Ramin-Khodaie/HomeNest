/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthProvider} from './src/context/auth';
import {AppNavigation} from './src/navigation/app-navigator';

Ionicons.loadFont();

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
}

export default App;
