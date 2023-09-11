import {StyleSheet, Text, View, Button} from 'react-native';
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";
const BottomMenuBar = () => {

  const [isModalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation()
    const searchBar = () =>{
        navigation.navigate('SearchBar')
    }

    
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
    <View style={styles.menuBar}>
      <View style={styles.menuebarIcons}>
        <View>
          <Text style={styles.footer_text}>Last edited on 19.30</Text>
        </View>
        <View style={styles.icons}>
          <Icon name="search1" size={20} color={'black'}  onPress={searchBar} />
          <IconF name="bookmark" size={20} color={'black'} />
          <View style={styles.dotsIcon}>
            <IconM name="dots-horizontal" size={20} color={'white'} onPress={toggleModal} />
          </View>
        </View>
      </View>
    </View>
    <View  style={{marginTop: 100}}>
      <Modal style={styles.model}   isVisible={isModalVisible}>
        <View >
          <Text style={{fontSize:30, color:"black"}}>Hello!</Text>
          <Text style={{fontSize:30, color:"black"}}>Hello!</Text>
          <Text style={{fontSize:30, color:"black"}}>Hello!</Text>
          <Text style={{fontSize:30, color:"black"}}>Hello!</Text>
          <Text style={{fontSize:30, color:"black"}}>Hello!</Text>
          <Text style={{fontSize:30, color:"black"}}>Hello!</Text>
          <Text style={{fontSize:30, color:"black"}}>Hello!</Text>
          <Text style={{fontSize:30, color:"black"}}>Hello!</Text>
          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
    </>
  );
};

export default BottomMenuBar;

const styles = StyleSheet.create({
  menuBar: {
    backgroundColor: 'white',
    borderTopColor: '#EFEEF0',
    borderTopWidth: 1,
    height: 48,
  },
  footer_text: {
    fontWeight: '400',
    fontSize: 12,
    color: 'black',
    marginLeft: 20,
  },
  menuebarIcons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    marginLeft: 100,
  },
  dotsIcon: {
    backgroundColor: '#6A3EA1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
  },
  model:{
    backgroundColor:'white',
    borderRadius:100,
    height:60,
    width: '95%',
    marginTop:100
  }
});
