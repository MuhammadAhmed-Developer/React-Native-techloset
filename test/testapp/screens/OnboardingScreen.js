import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
import CommonButton from '../components/CommonButton'



const OnboardingScreen = () => {

  const navigation = useNavigation()
  
  const GoLogin = () =>{
     navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <Text>  OnboardingScreen  </Text>
       <View style={styles.btnparent}>
      <Button onPress={GoLogin}  title='Go To login'  color='blue'/>
       </View>
      <CommonButton/>
    </View>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:"center",
    backgroundColor:"#6A3EA1",
    
  },
  btnparent:{
    display:'flex',
   justifyContent:"flex-end"
    }

})