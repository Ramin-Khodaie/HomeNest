import React, {FC, useState} from 'react';
import {Keyboard, Pressable, Text, View} from 'react-native';
import {AntIcon} from '../AntIcon';
import {colors} from '../../utils/colors';
import Button from '../Button';
import {Styles} from './styles';
import Input from '../Input';

type Props = {
  showBack?: boolean;
  goBack?: () => void;
  title: string;
  showLogout?: boolean;
  onLogout?: () => void;
  showSearch?: boolean;
  onSearch?: (v: string) => void;
  keyword?: string;
};

const Header: FC<Props> = ({
  showBack = false,
  goBack,
  title,
  showLogout = false,
  onLogout,
  showSearch = false,
  onSearch,
  keyword,
}) => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.container}>
        {showBack && (
          <Pressable onPress={goBack}>
            <AntIcon size="large" color={colors.primary} name="arrowleft" />
          </Pressable>
        )}
        {showSearch && (
          <Pressable onPress={() => setShowSearchInput(!showSearchInput)}>
            <AntIcon size="large" color={colors.primary} name="search1" />
          </Pressable>
        )}
        <Text style={Styles.title}>{title}</Text>
        {showLogout && onLogout && (
          <Pressable onPress={onLogout}>
            <AntIcon size="large" color={colors.primary} name="logout" />
          </Pressable>
        )}
      </View>
      {showSearchInput && onSearch && (
        <Input
          label=""
          onChange={onSearch}
          placeHolder="Type your keyword..."
          value={keyword as string}
        />
      )}
    </View>
  );
};

export {Header};
