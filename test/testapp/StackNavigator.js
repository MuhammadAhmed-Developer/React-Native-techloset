import { StyleSheet} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SavedScreen from './screens/SavedScreen';
import BookingScreen from './screens/BookingScreen';
import ProfileScreen from './screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/FontAwesome';

const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} options={{
          tabBarLabel: "Home", tabBarActiveTintColor:'#900', headerShown: false, tabBarIcon: ({ focused }) => focused ? (
            <><Icons name='home' size={30} color="#900" /></>) : (
            <><Icons name='home' size={30} color="#333" /></>
          )
        }} />


        <Tab.Screen name='Saved' component={SavedScreen} options={{
          tabBarLabel: "Saved", tabBarActiveTintColor:'#900', headerShown: false, tabBarIcon: ({ focused }) => focused ? (
            <><Icons name='heart' size={30} color="#900" /></>) : (
            <><Icons name='heart' size={30} color="#333" /></>
          )
        }} />



        <Tab.Screen name='Bookings' component={BookingScreen} options={{
          tabBarLabel: "Booking", tabBarActiveTintColor:'#900', headerShown: false, tabBarIcon: ({ focused }) => focused ? (
            <><Icons name='bell' size={30} color="#900" /></>) : (
            <><Icons name='bell' size={30} color="#333" /></>
          )
        }} />


        <Tab.Screen name='Profile' component={ProfileScreen} options={{
          tabBarLabel: "Profile",tabBarActiveTintColor:'#900', headerShown: false, tabBarIcon: ({ focused }) => focused ? (
            <><Icons name='user' size={30} color="#900" /></>) : (
            <><Icons name='user' size={30} color="#333" /></>
          )
        }} />

      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={BottomTabs} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})