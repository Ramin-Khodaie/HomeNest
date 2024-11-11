import Splash from '../screens/auth/Splash';
import SignIn from '../screens/auth/Signin';
import SignUp from '../screens/auth/Signup';
import {AuthStack} from '../types';

const AuthScreenStack = () => {
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

export {AuthScreenStack};
