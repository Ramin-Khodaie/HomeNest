import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../utils/colors';
import Home from '../screens/app/Home';
import Bookmarks from '../screens/app/Bookmarks';
import Profile from '../screens/app/Profile';

export type BottomTabParamList = {
  Home: {};
  Bookmark: {};
  Profile: {};
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          }
          if (route.name === 'Bookmark') {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
          }
          if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {borderTopWidth: 0, backgroundColor: colors.white},
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Bookmark" component={Bookmarks} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export {Tabs};
