import {Text, TextInput, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';
import {AntIcon} from '../AntIcon';
import {EntypoIcon} from '../EntypoIcon';
import {useState} from 'react';

interface InputProps<T> {
  label: string;
  placeHolder: string;
  value: string;
  onChange: (v: string) => void;
  password?: boolean;
  error?: boolean
}
const Input = <T,>({
  label,
  placeHolder,
  value,
  onChange,
  password,
  error
}: InputProps<T>) => {
  const [showPassword, setShowPassword] = useState(password);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, error && styles.error]}
        placeholder={placeHolder}
        placeholderTextColor={'#C5C5C5'}
        value={value}
        onChangeText={e => onChange(e)}
        secureTextEntry={showPassword}
      />
      {password && (
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.passwordIcon}
          onPress={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <EntypoIcon name="eye" size="extraLarge" color="#666" />
          ) : (
            <EntypoIcon name="eye-with-line" size="extraLarge" color="#666" />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;
