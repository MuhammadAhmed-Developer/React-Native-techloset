import React from 'react'
import { View, Text, Button } from 'react-native'

export default function App() {
  let name = 'Ahmed'
  let age = 19
  return (
    <>
    <View style={{padding:50, backgroundColor:'blue'}}>
      <Text style={{fontSize:35 , fontWeight:900}}>Mobile App Developnment</Text>
      <Button title='Press ME' color={"red"}/>
    </View>
    <View style={{backgroundColor:'lightpink', padding:50}}>
      <Text>{name}</Text>
      <Text>{age >= 19 ? `Your age is ${age}`  : ''}</Text>
    </View>
    </>
  )
}