import Home from '../screens/app/Home';
import Product from '../screens/app/Product';
import {HomeStack} from '../types';

const HomeScreenStack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="ProductDetail"
        component={Product}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};

export {HomeScreenStack};
