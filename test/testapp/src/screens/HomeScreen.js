import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity } from 'react-native'

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image source={require('../assects/images/Home.png')} />
        </View>
        <Text style={styles.journey}>Start Your Journey</Text>
        <Text style={styles.text}>Every big step start  with small step.
          Notes your first idea and start
          your journey!</Text>
      </View>
      <View style={styles.btnCon}>
        <TouchableOpacity>
           <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 100
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
  plus:{
    color:'black',

  }
})