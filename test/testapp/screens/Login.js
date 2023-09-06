import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
const Login = () => {

  const navigation = useNavigation()

  const OnboardingScreen = () =>{
    navigation.navigate('OnboardingScreen')
 }
  return (
    <View>
      <Text>Login Page</Text>
      <Button title='Login' onPress={OnboardingScreen}/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})