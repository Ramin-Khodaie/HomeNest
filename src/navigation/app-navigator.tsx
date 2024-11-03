import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAuth} from '../context/auth';
import {colors} from '../utils/colors';
import {Tabs} from './tab-navigator';
import {AuthNavigator} from './auth-navigator';
import {ProfileNavigator} from './profile-navigator';

const AppStack = createNativeStackNavigator();

const AppNavigation = () => {
  const {user} = useAuth();
  console.log("🚀 ~ file: app-navigator.tsx:13 ~ AppNavigation ~ user:", user)

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
          <AppStack.Navigator>
            <AppStack.Screen
              name="Tabs"
              component={Tabs}
              options={{headerShown: false}}
            />
          </AppStack.Navigator>
          <ProfileNavigator />
        </>
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};

export {AppNavigation};
