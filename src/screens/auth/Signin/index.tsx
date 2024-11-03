import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';
import {SubmitHandler, useForm, Controller} from 'react-hook-form';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {useAuth} from 'context/auth';
import {AuthStackParamList} from 'types';
import AuthHeader from 'components/AuthHeader';
import Button from 'components/Button';
import GoogleButton from 'components/GoogleButton';
import Input from 'components/Input';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;

type SignInFormProps = {
  email: string;
  password: string;
};

interface SignInProps extends Props {}

const SignIn = ({navigation, route}: SignInProps) => {
  const {setUser} = useAuth();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignInFormProps>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<SignInFormProps> = data => {
    setUser({token: `${data.email}`});
  };

  return (
    <View style={styles.container}>
      <AuthHeader
        title="Sign In"
        onBack={() => navigation.navigate('Splash', {})}
      />
      <View style={styles.form}>
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
              placeHolder="**********"
              value={value}
              password
              onChange={onChange}
              error={Boolean(errors.password)}
            />
          )}
        />
        <View style={styles.bottom}>
          <Button title="Sign in" onPress={handleSubmit(onSubmit)} />

          <View style={styles.signinWith}>
            <View style={styles.line} />
            <Text style={styles.signUpWithText}>Or Sign up with</Text>
            <View style={styles.line} />
          </View>
          <GoogleButton onPress={() => {}} />
          <Text style={styles.already}>
            Don't have an account? <Text style={styles.signIn}>Sing Up</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
