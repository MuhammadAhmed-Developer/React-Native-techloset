import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../auth/Login';
import OnboardingScreen from '../screens/OnboardingScreen';
import Register from '../auth/Register';
import Icons from 'react-native-vector-icons/FontAwesome6';
import ForgotPassword from '../auth/ForgotPassword';
import CreateNewPassword from '../auth/CreateNewPassword';
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

  export default function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name='HomeScreen' component={HomeScreen} options={{
          tabBarLabel: "Home", tabBarActiveTintColor:'#900', headerShown: false, tabBarIcon: ({ focused }) => focused ? (
            <><Icons name='home' size={30} color="#900" /></>) : (
            <><Icons name='home' size={30} color="#333" /></>
          )
        }} />


        <Tab.Screen name='Login' component={Login} options={{
          tabBarLabel: "Login", tabBarActiveTintColor:'#900', headerShown: false, tabBarIcon: ({ focused }) => focused ? (
            <><Icons name='heart' size={30} color="#900" /></>) : (
            <><Icons name='heart' size={30} color="#333" /></>
          )
        }} />



        <Tab.Screen name='Register' component={Register} options={{
          tabBarLabel: "Register", tabBarActiveTintColor:'#900', headerShown: false, tabBarIcon: ({ focused }) => focused ? (
            <><Icons name='bell' size={30} color="#900" /></>) : (
            <><Icons name='bell' size={30} color="#333" /></>
          )
        }} />


        <Tab.Screen name='ForgotPassword' component={ForgotPassword} options={{
          tabBarLabel: "ForgotPassword",tabBarActiveTintColor:'#900', headerShown: false, tabBarIcon: ({ focused }) => focused ? (
            <><Icons name='user' size={30} color="#900" /></>) : (
            <><Icons name='user' size={30} color="#333" /></>
          )
        }} />

      </Tab.Navigator>
    )
  }




