import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';
import {AntIcon} from '../AntIcon';
interface ButtonProps {
  onPress: () => void;
  icon?: any;
}

const GoogleButton: React.FC<ButtonProps> = ({onPress, icon}) => {
  return (
    <TouchableOpacity
      hitSlop={4}
      style={[styles.container]}
      onPress={onPress}
      activeOpacity={0.7}>
      <AntIcon name="google" size="extraLarge" color="white" />
    </TouchableOpacity>
  );
};

export default GoogleButton;
