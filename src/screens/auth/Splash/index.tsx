import React from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';
import Button from '../../../components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../../../App';

type SplashScreenProps = NativeStackScreenProps<AuthStackParamList, 'Splash'>;

const Splash = ({navigation}: SplashScreenProps) => {
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
      <Pressable onPress={()=>navigation.navigate('SignIn', {})}>
        <Text style={styles.signInText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default Splash;
