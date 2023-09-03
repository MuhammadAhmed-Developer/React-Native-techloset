import React from 'react'
import { View, Text, Button } from 'react-native'
import CompanyData from './components/CompanyData'

const  App=()=> {
  // let name = 'Ahmed'
  
  // let age = 19

  const handlePress = (name) =>{
      console.log(`Hello Press btn ${name}`)
  }

  return (
    <View style={{padding:30,display:'flex', alignItems:"center"}}>
    <Text>
      Button with onpress Event
    </Text>
    {/* <Button title='Pree ME' onPress={handlePress} /> */}
    <Button title='Pree ME' color={'green'} onPress={()=>handlePress('Ahmed')} />



    {/* <View style={{padding:50, backgroundColor:'blue'}}>
      <Text style={{fontSize:35 , fontWeight:900}}>Mobile App Developnment</Text>
      <Button title='Press ME' color={"red"}/>
    </View>
    <View style={{backgroundColor:'black', padding:50}}>
      <Text>{name}</Text>
      <Text>{age >= 19 ? `Your age is ${age}`  : ''}</Text>
      {
        age==19?<Text>Your age is 19</Text>:<Text>Your age in not  19</Text>
      }
    </View>
    <View style={{padding:50, backgroundColor:'green'}}>
   <UserData/>
   <UserData/>
    </View> */}
    </View>
  )
}


// const UserData = () =>{
//   return(
//     <>
//     <Text>USer Name = Ahmed</Text>
//     <Text>USer Email = ahmed@gmail.com</Text>
//     <Text>Company: <CompanyData/></Text>
//     </>
//   )
// }




export  default App