import React from 'react';
import {ProfileStackParams} from '../../types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text} from 'react-native';

type Props = NativeStackScreenProps<ProfileStackParams, 'MyListings'>;
const MyListings = ({route}: Props) => {
  return <Text>MyListings and name is {route.params.name}</Text>;
};

export {MyListings};
