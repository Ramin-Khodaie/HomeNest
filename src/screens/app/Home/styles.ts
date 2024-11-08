import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  categories: {
    flexDirection: 'row',
    gap: 16,
  },
  list: {
    marginTop: 16,
    display: 'flex',
  },
  content: {
    gap: 16,
    paddingHorizontal: 24,
  },
  products: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  row: {
    justifyContent: 'space-between',
  },
});

export {styles};
