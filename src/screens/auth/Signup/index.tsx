import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import CheckBox from '../../../components/CheckBox';
import GoogleButton from '../../../components/GoogleButton';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useAuth} from '../../../context/auth';
import { AuthStackParamList } from 'src/navigation/auth-navigator';

type SignUpFormProps = {
  name: string;
  email: string;
  password: string;
};
interface SignUpProps {
  onSignUp: () => {};
}
type Props = NativeStackScreenProps<AuthStackParamList, 'SignUp'>;

const SignUp = ({navigation, route}: Props) => {
  const {setUser} = useAuth();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignUpFormProps>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<SignUpFormProps> = data => {
    route.params.onSignIn?.();
  };

  return (
    <View style={styles.container}>
      <AuthHeader
        title="Sign Up"
        onBack={() => navigation.navigate('Splash', {})}
      />
      <View style={styles.form}>
        <Controller
          control={control}
          name="name"
          rules={{required: true}}
          render={({field: {value, onChange}}) => (
            <Input
              label="Name"
              placeHolder="John Doe"
              value={value}
              onChange={onChange}
              error={Boolean(errors.name)}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          rules={{required: true}}
          render={({field: {value, onChange}}) => (
            <Input
              label="E-mail"
              placeHolder="johnDoe@gmail.com"
              value={value}
              onChange={onChange}
              error={Boolean(errors.email)}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{required: true}}
          render={({field: {value, onChange}}) => (
            <Input
              label="Password"
              placeHolder="*********"
              value={value}
              onChange={onChange}
              password
              error={Boolean(errors.password)}
            />
          )}
        />
        <View style={styles.bottom}>
          <CheckBox
            _renderLabel={() => (
              <Text style={styles.termsAndPrivacy}>
                I agree with <Text style={styles.strong}>Terms</Text> &{' '}
                <Text style={styles.strong}>Privacy</Text>
              </Text>
            )}
          />
          <Button title="Sign up" onPress={handleSubmit(onSubmit)} />
          <View style={styles.signUpWith}>
            <View style={styles.line} />
            <Text style={styles.signUpWithText}>Or Sign up with</Text>
            <View style={styles.line} />
          </View>
          <GoogleButton onPress={() => {}} />
          <Text style={styles.already}>
            Already have an account?{' '}
            <Text
              style={styles.signIn}
              onPress={() => navigation.navigate('SignIn', {onSignIn() {}})}>
              Sing In
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
