import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

const styles = StyleSheet.create({
  text: {
    color: colors.black,
  },
  categories: {
    flexDirection: 'row',
    gap: 16,
  },
  list: {    
    marginTop: 16,
  },
});

export {styles};
