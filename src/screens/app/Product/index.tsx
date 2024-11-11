import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {HomeStackParams} from '../../../types';
import {Header} from '../../../components/Header';
import Carousel from '../../../components/Carousel';

type Props = NativeStackScreenProps<HomeStackParams, 'ProductDetail'> & {};

const Product = ({route, navigation}: Props) => {
  return (
    <SafeAreaView style={{backgroundColor: 'red'}}>
      <Carousel images={[]} />
    </SafeAreaView>
  );
};

export default Product;
