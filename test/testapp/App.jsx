import React from 'react'
import { View, Text, Button } from 'react-native'

export default function App() {
  return (
    <View style={{padding:50, backgroundColor:'blue'}}>
      <Text style={{fontSize:35 , fontWeight:900}}>Mobile App Developnment</Text>
      <Button title='Press ME' color={"red"}/>
    </View>
  )
}