import React from 'react';
import {Pressable, Text, View} from 'react-native';

import {styles} from './styles';
import {AntIcon} from '../AntIcon';
import {colors} from '../../utils/colors';

interface AuthHeaderProps {
  title: string;
  onBack: () => void;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({title, onBack}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onBack}>
        <AntIcon size="medium" color={colors.primary} name="arrowleft" />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default AuthHeader;
