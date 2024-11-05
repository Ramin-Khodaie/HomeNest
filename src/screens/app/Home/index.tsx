import {FlatList, Text, View} from 'react-native';
import {styles} from './styles';
import {Header} from '../../../components/Header';
import {categories} from '../../../data/categories';
import {CategoryBox} from '../../../components/CategoryBox';
import {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
const Home = () => {
  const [selected, setSelected] = useState(0);

  return (
    <SafeAreaView>
      <Header
        title="Find All You Need"
        showSearch
        showLogout
        onLogout={() => {}}
        onSearch={() => {}}
      />
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={categories}
        horizontal
        style={styles.list}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item}) => (
          <CategoryBox
            key={item.id}
            title={item.title}
            image={item.image}
            isSelected={selected === item.id}
            onPress={() => setSelected(item.id)}
            isFirst={item.id === 0}
          />
        )}
      />
      {/* <View style={styles.categories}>
        {categories.map(cat => (
         
        ))}
      </View> */}
    </SafeAreaView>
  );
};

export default Home;
