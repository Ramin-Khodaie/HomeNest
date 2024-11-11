import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../utils/colors';
import Bookmarks from '../screens/app/Bookmarks';
import {RootStack, TabStack} from '../types';
import {HomeScreenStack} from './home-stack';
import {useAuth} from '../context/auth';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {AuthScreenStack} from './auth-stack';
import {ProfileScreenStack} from './profile-stack';

const Tabs = () => {
  return (
    <TabStack.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';
          if (route.name === 'HomeStack') {
            iconName = focused ? 'home' : 'home-outline';
          }
          if (route.name === 'Bookmarks') {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
          }
          if (route.name === 'ProfileStack') {
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
      <TabStack.Screen name="HomeStack" component={HomeScreenStack} />
      <TabStack.Screen name="Bookmarks" component={Bookmarks} />
      <TabStack.Screen name="ProfileStack" component={ProfileScreenStack} />
    </TabStack.Navigator>
  );
};

const AppStack = () => {
  const {user} = useAuth();

  const theme = {
    ...DefaultTheme,
    colors: {
      background: colors.white,
      primary: '',
      card: '',
      text: '',
      border: '',
      notification: '',
    },
  };

  return (
    <NavigationContainer theme={theme}>
      {user?.token ? (
        <>
          <RootStack.Navigator>
            <RootStack.Screen
              name="Tabs"
              component={Tabs}
              options={{headerShown: false}}
            />
          </RootStack.Navigator>
        </>
      ) : (
        <AuthScreenStack />
      )}
    </NavigationContainer>
  );
};
export {AppStack};
