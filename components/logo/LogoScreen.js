import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Modal, Alert, TextInput } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

function LogoScreen({weatherData}) {

  const [modalVisible, setModalVisible] = useState(false);

    let [fontsLoaded] = useFonts({
        'Inter-Black': require('../../assets/fonts/Itim-Regular.ttf'),
      });
    
        if (!fontsLoaded) {
            return <AppLoading />;
        } else {
            return (
                <View style={styles.container}>
                  <Entypo name="location-pin" size={24} color="#313061" style={{margin:5}} />
                  <Text style={{fontSize:20, color: '#313061', fontFamily:'Inter-Black', margin:5, fontWeight:'bold'}}>{weatherData.name}</Text>
                  <TouchableHighlight
                    onPress={() => {
                      setModalVisible(true);
                    }}>
                      <MaterialIcons name="keyboard-arrow-down" size={24} color="#313061" style={{margin:5}} />
                  </TouchableHighlight>

                  <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                  }}>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <View style={{width:'100%',}}>
                        <TouchableHighlight
                        style={{width:'100%', alignItems:'center', padding:20}}
                          onPress={() => {
                            setModalVisible(false);
                          }}>
                          <SimpleLineIcons name="arrow-down" size={24} color="white" />
                        </TouchableHighlight>
                      </View>
                      <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center', width:'100%'}}>
                        <TextInput
                          placeholder="Enter you city name..."
                          style={{ height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor:'white', paddingLeft:10,}}
                          value="Sardar shahar"
                        />
                        
                        <TouchableHighlight style={{padding:10}}>
                          <FontAwesome name="search" size={24} color="white" />
                        </TouchableHighlight>
                      </View>
                    </View>
                  </View>
                </Modal>

                

                </View>
            );
        }
}

export default LogoScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#232634',
    alignItems: 'center',
    flex:1,
    width:'100%',
    marginTop: 280,
    opacity: 0.9
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
