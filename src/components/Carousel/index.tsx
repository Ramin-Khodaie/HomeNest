import React from 'react';
import {Text, View} from 'react-native';

type Props = {
  images: string[];
};
const Carousel: React.FC<Props> = ({images}) => {
  return (
    <View>
      <Text>Carousel</Text>
    </View>
  );
};

export default Carousel;
