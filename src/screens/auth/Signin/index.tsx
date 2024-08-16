import React from 'react';
import {Text, View} from 'react-native';
import Input from '../../../components/Input';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';

import {styles} from './styles';
import GoogleButton from '../../../components/GoogleButton';
import {SubmitHandler, useForm, Controller} from 'react-hook-form';

type SignInFormProps = {
  email: string;
  password: string;
};

interface SignInProps {}

const SignIn: React.FC<SignInProps> = () => {
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
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <AuthHeader title="Sign In" onBack={() => {}} />
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
              error = {Boolean(errors.password)}
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
