import React, { ReactElement } from 'react';
import AIcon from 'react-native-vector-icons/AntDesign';

AIcon.loadFont();

type IconSizeProps = {
  iconSizes: keyof typeof IconSizes;
};

export interface IconProps {
  size: IconSizeProps['iconSizes'];
  name: string;
  color: string;
}

export const IconSizes = {
  small: 13,
  medium: 18,
  large: 23,
  extraLarge: 27,
};

export const AntIcon = ({size, name, color}: IconProps) => (
  <AIcon name={name} size={IconSizes[size]} color={color} />
);


