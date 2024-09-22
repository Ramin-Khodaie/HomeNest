
import { NativeStackNavigationEventMap, NativeStackNavigationOptions, createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/app/Home";
import Bookmarks from "../screens/app/Bookmarks";
import Profile from "../screens/app/Profile";
import { ParamListBase, RouteConfig, StackNavigationState } from "@react-navigation/native";
import Splash from "../screens/auth/Splash";
import SignIn from "../screens/auth/Signin";
import SignUp from "../screens/auth/Signup";


export type AppStackParamList = {
    Home: {},
    Bookmarks: {},
    Profile: {}
}

export type AuthStackParamList = {
    Splash: {},
    SignIn: {},
    SignUp: {}
}

// generic stack routes type
export type StackRoutesType<ParamList extends ParamListBase> = Array<
    RouteConfig<
        ParamList,
        keyof ParamList,
        StackNavigationState<ParamList>,
        NativeStackNavigationOptions,
        NativeStackNavigationEventMap
    >>

type AppStackRoutesType = StackRoutesType<AppStackParamList>
type AuthStackRoutsType = StackRoutesType<AuthStackParamList>


export const AppStack = createNativeStackNavigator<AppStackParamList>();

export const appStackRoutes: AppStackRoutesType = [
    {
        name: 'Home',
        component: Home
    },
    {
        name: 'Bookmarks',
        component: Bookmarks
    },
    {
        name: 'Profile',
        component: Profile
    },
]



