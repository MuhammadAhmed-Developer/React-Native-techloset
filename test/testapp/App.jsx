import React from 'react'
import StackNavigator from './src/navigation/StackNavigator'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const App = () => {
  return (
    <>
    {/* <GestureHandlerRootView> */}
       <StackNavigator/>
    {/* </GestureHandlerRootView> */}
    </>
  )
}

export default App
