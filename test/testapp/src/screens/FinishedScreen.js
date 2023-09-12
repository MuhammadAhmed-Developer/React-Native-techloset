import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const FinishedScreen = () => {
  return (

    <ScrollView>
        <View style={styles.main}>

    <View style={styles.header}>
      <Text>FinishedScreen</Text>
    </View>
        </View>
    </ScrollView>
  )
}

export default FinishedScreen

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:'black'
  }
})