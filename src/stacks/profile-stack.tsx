import {CreateListing} from '../screens/app/create-listing';
import {Settings} from '../screens/app/settings';
import Profile from '../screens/app/Profile';
import {MyListings} from '../screens/app/my-listings';
import {ProfileStack} from '../types';

const ProfileScreenStack = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <ProfileStack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
      <ProfileStack.Screen
        name="CreateListing"
        component={CreateListing}
        options={{headerShown: false}}
      />
      <ProfileStack.Screen
        name="MyListings"
        component={MyListings}
        options={{headerShown: false}}
      />
    </ProfileStack.Navigator>
  );
};

export {ProfileScreenStack};
