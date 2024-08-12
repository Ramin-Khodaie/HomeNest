import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';
import Button from '../../../components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const Splash = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../../assets/images/splash-listicle.png')}
      />
      <View>
        <Text style={styles.sloganText}>You'll Find</Text>
        <Text style={[styles.sloganText, styles.coloredText]}>
          All you need
        </Text>
        <Text style={styles.sloganText}>Here!</Text>
      </View>
      <Button
        title="Sign up"
        onPress={() => navigation.navigate('SignUp', {})}
      />
    </View>
  );
};

export default Splash;
