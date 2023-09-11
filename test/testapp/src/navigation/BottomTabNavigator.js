import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../auth/Login';
import OnboardingScreen from '../screens/OnboardingScreen';
import Register from '../auth/Register';
import Icons from 'react-native-vector-icons/FontAwesome6';
import IconsM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconsE from 'react-native-vector-icons/Entypo';
import IconsA from 'react-native-vector-icons/AntDesign';
import IconsI from 'react-native-vector-icons/Ionicons';
import ForgotPassword from '../auth/ForgotPassword';
import CreateNewPassword from '../auth/CreateNewPassword';
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();


export default function BottomTabNavigator() {


  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
          height: 69,
          paddingVertical: 20,
          paddingBottom: 2,
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 0,
          shadowOpacity: 0.1,

        },
      }}
    >
      <Tab.Screen name='HomeScreen' component={HomeScreen} options={{
        tabBarLabel: "Home", tabBarActiveTintColor: '#6A3EA1', headerShown: false, tabBarIcon: ({ focused }) => focused ? (
          <><IconsE name='home' size={30} color="#6A3EA1" /></>) : (
          <><IconsM name='home-outline' size={30} color="#827D89" /></>
        )
      }} />


      <Tab.Screen name='Login' component={Login} options={{
        tabBarLabel: "Finished", tabBarActiveTintColor: '#6A3EA1', headerShown: false, tabBarIcon: ({ focused }) => focused ? (
          <><Icons name='clipboard-check' size={30} color="#6A3EA1" /></>) : (
          <><IconsM name='clipboard-check-outline' size={30} color="#827D89" /></>
        )
      }} />

      <Tab.Screen name='CreateNewPassword' component={CreateNewPassword} options={{
        tabBarLabel: '', tabBarIconStyle: {
          position: 'relative',
          marginTop: -40,
          tabBarHideOnKeyboard: true,

        }, tabBarActiveTintColor: '#6A3EA1', headerShown: false, tabBarIcon: ({ focused }) => focused ? (
          <><IconsI name='add-circle-sharp' size={70} color="#6A3EA1" /></>) : (
          <><IconsI name='add-circle-sharp' size={70} color="#6A3EA1" /></>
        )
      }} />


      <Tab.Screen name='Register' component={Register} options={{
        tabBarLabel: "Search", tabBarActiveTintColor: '#6A3EA1', headerShown: false, tabBarIcon: ({ focused }) => focused ? (
          <><IconsA name='search1' size={30} color="#6A3EA1" /></>) : (
          <><IconsA name='search1' size={30} color="#827D89" /></>
        )
      }} />


      <Tab.Screen name='ForgotPassword' component={ForgotPassword} options={{
        tabBarLabel: "Settings", tabBarActiveTintColor: '#6A3EA1', headerShown: false, tabBarIcon: ({ focused }) => focused ? (
          <><IconsA name='setting' size={30} color="#6A3EA1" /></>) : (
          <><IconsA name='setting' size={30} color="#827D89" /></>
        )
      }} />

    </Tab.Navigator>
  )
}




