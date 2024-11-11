import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Auth Stack
export type AuthStackParam = {
  Splash: undefined;
  SignIn: undefined;
  SignUp: undefined;
};
export const AuthStack = createNativeStackNavigator<AuthStackParam>();

// Profile Stack
export type ProfileStackParams = {
  Profile: undefined;
  MyListings: {
    name: string;
  };
  Settings: undefined;
  CreateListing: undefined;
};
export const ProfileStack = createNativeStackNavigator<ProfileStackParams>();

// Home Stack
export type HomeStackParams = {
  Home: undefined;
  ProductDetail: {
    productId: number;
  };
};

export const HomeStack = createNativeStackNavigator<HomeStackParams>();

// App Stack
export type TabStackParam = {
  HomeStack: NavigatorScreenParams<HomeStackParams>;
  Bookmarks: undefined;
  ProfileStack: NavigatorScreenParams<ProfileStackParams>;
};
export const TabStack = createBottomTabNavigator<TabStackParam>();

export type RootStackParams = {
  Tabs: undefined;
};

export const RootStack = createNativeStackNavigator<RootStackParams>();
