import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

const Styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: colors.black,
  },
});

export {Styles};
