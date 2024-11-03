import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/auth/Splash';
import SignIn from '../screens/auth/Signin';
import SignUp from '../screens/auth/Signup';

export type AuthStackParamList = {
  Splash: {};
  SignIn: {onSignIn?: () => void};
  SignUp: {onSignIn?: () => void};
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name={'Splash'} component={Splash} options={{}} />
      <AuthStack.Screen name={'SignIn'} component={SignIn} />
      <AuthStack.Screen name={'SignUp'} component={SignUp} />
    </AuthStack.Navigator>
  );
};

export {AuthNavigator};
