import {FlatList, View} from 'react-native';
import {styles} from './styles';
import {Header} from '../../../components/Header';
import {categories} from '../../../data/categories';
import {products} from '../../../data/product';
import {CategoryBox} from '../../../components/CategoryBox';
import {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Category} from '../../../types/category.types';
import Product from '../../../components/Product';
import {Product as ProductType} from '../../../types/product.types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabParamList} from '../../../navigation/tab-navigator';

export type HomeScreenProps = NativeStackScreenProps<
  BottomTabParamList,
  'Home'
>;

const Home = ({navigation}: HomeScreenProps) => {
  const [selected, setSelected] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const _renderCategoryBox = ({item}: {item: Category}) => {
    return (
      <CategoryBox
        key={item.id}
        title={item.title}
        image={item.image}
        isSelected={selected === item.id}
        onPress={() => setSelected(item.id)}
      />
    );
  };

  const _renderProduct = ({item}: {item: ProductType}) => {
    return <Product product={item} onPress={() => handlePressProduct(item)} />;
  };

  const handlePressProduct = (product: ProductType) => {
    console.log(
      '🚀 ~ file: index.tsx:42 ~ handlePressProduct ~ product:',
      product,
    );
  };
  useEffect(() => {
    let updatedList;
    if (selected === 0 && !keyword) setFilteredProducts(products);
    else if (selected && !keyword) {
      updatedList = products.filter(product => product.category === selected);
      setFilteredProducts(updatedList);
    } else if (!selected && keyword) {
      updatedList = products.filter(product =>
        product.title.toLowerCase().includes(keyword.toLocaleLowerCase()),
      );
      setFilteredProducts(updatedList);
    } else if (selected && keyword) {
      updatedList = products.filter(
        product =>
          product.category === selected &&
          product.title.toLowerCase().includes(keyword.toLocaleLowerCase()),
      );
      setFilteredProducts(updatedList);
    }
  }, [selected, keyword]);

  return (
    <SafeAreaView>
      <Header
        title="Find All You Need"
        showSearch
        onSearch={e => {
          setKeyword(e);
        }}
      />
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={categories}
        horizontal
        style={styles.list}
        contentContainerStyle={styles.content}
        keyExtractor={(item, index) => String(index)}
        renderItem={_renderCategoryBox}
      />
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={filteredProducts as ProductType[]}
        horizontal={false}
        numColumns={2}
        columnWrapperStyle={styles.row}
        style={styles.products}
        keyExtractor={(item, index) => String(item.id)}
        renderItem={_renderProduct}
        ListFooterComponent={<View style={{height: 200}} />}
      />
    </SafeAreaView>
  );
};

export default Home;
