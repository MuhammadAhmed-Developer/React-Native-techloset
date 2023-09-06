import {   Pressable, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
const CommonButton = () => {
  return (
    <View>
      <Pressable style={styles.btn} >
      <Text style={styles.text}>Let's Get Started</Text>  
      <Icon style={styles.icon} name="arrow-right" size={30} color="#6A3EA1"  />
      </Pressable>
    </View>
  )
}

export default CommonButton

const styles = StyleSheet.create({
  btn:{
    backgroundColor: 'white',
    paddingVertical:15,
    paddingHorizontal:20,
    display:'flex',
    flexDirection:'row',
    justifyContent:"space-between",
    borderRadius:50,
    width: 320
  },
  text:{
    color:'#6A3EA1',
    fontSize:17,
    fontWeight:'bold',
    paddingLeft:70
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  icon:{
     fontSize:25,
      textAlign:'right',
      paddingLeft:40,
  }
})