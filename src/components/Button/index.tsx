import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';
interface ButtonProps {
  title?: string;
  onPress: () => void;
  icon?:any
}

const Button: React.FC<ButtonProps> = ({title, onPress, icon}) => {
  return (
    <TouchableOpacity
      hitSlop={4}
      style={[styles.container]}
      onPress={onPress}
      activeOpacity={0.7}
      
      >
      <Text style={styles.title}>{title}</Text>
      {icon ?? ''}
    </TouchableOpacity>
  );
};

export default Button;
