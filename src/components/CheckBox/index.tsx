import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

import {styles} from './styles';
import {AntIcon} from '../AntIcon';
interface CheckBoxProps {
  _renderLabel: () => React.ReactNode;
}

const CheckBox: React.FC<CheckBoxProps> = ({_renderLabel}) => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.checkBox, checked && styles.checked]}
        onPress={() => setChecked(!checked)}>
        <View style={styles.checkIcon}>
          {checked && <AntIcon name="check" color="white" size="medium" />}
        </View>
      </TouchableOpacity>
      {_renderLabel()}
    </View>
  );
};

export default CheckBox;
