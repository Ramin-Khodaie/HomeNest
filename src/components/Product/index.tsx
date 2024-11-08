import React, {FC} from 'react';
import {Product as ProductType} from '../../types/product.types';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './styles';

type Props = {
  product: ProductType;
  onPress: () => void;
};
const Product: FC<Props> = ({product, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Image
        style={styles.image}
        source={{uri: product.image}}
        alt={product.title}
      />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </Pressable>
  );
};

export default Product;
