import { PureComponent } from 'react'
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import PurpleBtn from '../components/PurpleBtn'

const HomeScreen = () => {

  const navigation = useNavigation()

     const CreateNewNotes = () =>{
       navigation.navigate('CreateNewNotes')
     }

  return (
    <ScrollView style={styles.main}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#FAF8FC" />
      <View style={styles.container}>
        <View>
          <Image source={require('../assects/images/Home.png')} />
        </View>
        <Text style={styles.journey}>Start Your Journey</Text>
        <Text style={styles.text}>Every big step start  with small step.
          Notes your first idea and start
          your journey!</Text>
        <PurpleBtn title='New Notes'  func={CreateNewNotes}/>
      </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  main:{
      backgroundColor:'#FAF8FC'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 100,
    
    
  },
  journey: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28.8,
    color: '#180E25'
  },
  text:{
    fontSize:14,
    fontWeight:'400',
    lineHeight:19.6,
    color:"#827D89",
    width:237,
    textAlign:'center',
    marginTop:20
  },
 })