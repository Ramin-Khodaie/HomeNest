import React, {FC, useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './styles';

type Props = {
  title: string;
  image: string;
  onPress: () => void;
  isSelected: boolean;
  isFirst?: boolean;
};
const CategoryBox: FC<Props> = ({
  image,
  title,
  isSelected,
  onPress,
  isFirst,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={(styles.button, isFirst && {marginLeft: 24})}>
      <View style={[styles.imageContainer, isSelected && styles.selected]}>
        <Image style={styles.image} source={{uri: image}} alt={title} />
      </View>
      <Text style={[styles.title, isSelected && styles.selectedText]}>
        {title}
      </Text>
    </Pressable>
  );
};

export {CategoryBox};
