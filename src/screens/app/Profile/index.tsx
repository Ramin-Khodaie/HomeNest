import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Pressable, Text, Touchable, View} from 'react-native';
import {ProfileStackParams} from '../../../types';

type Props = NativeStackScreenProps<ProfileStackParams> & {};

const Profile = ({navigation}: Props) => {
  return (
    <View>
      <Text>Profile</Text>
      <Pressable onPress={() => navigation.navigate('Settings')}>
        <Text>Settings</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('MyListings', {name: 'sulduz'})}>
        <Text>listing</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('CreateListing')}>
        <Text>ele bele</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
