import {  Image, StatusBar, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import PurpleBtn from '../components/PurpleBtn'
const Login = () => {

  const navigation = useNavigation()

  const Register = () => {
    navigation.navigate('Register')
  }
  return (
    <ScrollView >
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" />
      <View>
        <Text style={styles.login}>Let's Login</Text>
        <Text style={styles.notesIdea}>And notes your idea</Text>
        <View style={styles.inputParent}>
          <Text style={styles.lable}>Email Address</Text>
          <TextInput style={styles.input} placeholderTextColor={'#C8C5CB'} placeholder='Example: johndoe@gmail.com' />
        </View>
        <View style={styles.inputParent}>
          <Text style={styles.lable}>Password</Text>
          <TextInput style={styles.input} placeholderTextColor={'#C8C5CB'} placeholder='********' />
        </View>
        <Text style={styles.forgot}>Forgot Password</Text>
        <View style={{ marginTop: 25 }}>
          <PurpleBtn style={styles.btn} title='Login' icon="arrow-right" func={Register} />
        </View>

        <View style={styles.parentLine}>
          <View style={styles.left}></View>
          <Text style={styles.Or}>Or</Text>
          <View style={styles.right}></View>
        </View>
        <View>
          <TouchableOpacity style={styles.btn}>
            <Image source={require('../assects/images/google.png')} />
            <Text style={styles.text}>Login with Google</Text>
          </TouchableOpacity>
          <Text style={styles.registerHere}>Don’t have any account? <Text onPress={Register}>Register here</Text> </Text>
        </View>
      </View>
    </View>
    </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 80

  },
  login: {
    fontSize: 32,
    color: '#180E25',
    fontWeight: '700',
    fontFamily:'Inter',
    lineHeight: 38.4
  },
  notesIdea: {
    color: '#827D89',
    fontSize: 16,
    marginTop: 20,
    fontFamily:'Inter',
  },
  input: {
    borderWidth: 1,
    padding: 16,
    color: "#180E25",
    width:328,
    borderColor: '#C8C5CB',
    borderRadius: 8,
    height: 54,
    
  },

  lable: {
    color: "black",
    fontSize: 16,
    fontWeight:'500',
    marginVertical: 10,
    lineHeight: 22.4
  },
  inputParent: {
    marginTop: 20
  },

  forgot: {
    color: "#6A3EA1",
    fontSize: 16,
    marginVertical: 15,
    fontWeight:"500",
    textDecorationLine: "underline",
  },
  Or: {
    textAlign: 'center',
    color: '#827D89',
    fontSize:12,
    fontWeight:"500"

  },
  left: {
    backgroundColor: "#EFEEF0",
    padding: 1,
    height: 1,
    width: 130,
    marginTop: 10
  },
  right: {
    backgroundColor: "#EFEEF0",
    padding: 1,
    height: 1,
    width: 130,
    marginTop: 10
  },
  parentLine: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  btn: {
    backgroundColor: 'transparent',
    paddingVertical: 15,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 100,
    width: 320,
    borderColor:"#C8C5CB",
    borderWidth : 1 ,
  },
  text: {
    color: '#6A3EA1',
    fontSize: 16  ,
    fontWeight: '500',
    paddingLeft: 15
  },
  registerHere: {
    color: '#6A3EA1',
    fontSize: 16,
    textAlign: "center",
    marginTop: 30,
    lineHeight: 22.4, 
    fontWeight:'500'

  }
})