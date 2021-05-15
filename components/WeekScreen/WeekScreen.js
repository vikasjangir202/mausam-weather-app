import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function WeekScreen({navigation}) {

    let [fontsLoaded] = useFonts({
        'Inter-Black': require('../../assets/fonts/Itim-Regular.ttf'),
      });
    
        if (!fontsLoaded) {
            return <AppLoading />;
        } else {
            return (
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableHighlight onPress={()=> navigation.goBack()}>
                                <AntDesign name="arrowleft" size={24} color="white" style={{padding:10}} />
                            </TouchableHighlight>
                        </View>
                        <View style={{flexDirection:'row', marginLeft: 50, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:24, color: 'white', fontFamily:'Inter-Black', padding:10, fontWeight:'bold'}}>Sardar Shahar</Text>
                            <MaterialIcons name="keyboard-arrow-down" size={24} color="white" style={{padding:10}} />
                        </View>
                    </View>
                    {/* Temp view starts*/}
                    <View style={styles.temp}>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <Text style={{color:'#93959C', paddingTop:10}}>15 minutes ago</Text>
                            <FontAwesome5 name="cloud-sun" size={24} color="white" />
                        </View>
                        <View>
                            <Text style={{color:'#CBCDD0', fontSize:18, paddingTop:10}}>The wind is very strong today! This is not the time for a yacht trip.</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', width:'100%'}}>
                        <Octicons name="primitive-dot" size={15} color="white" style={{margin:5}} />
                        <Octicons name="primitive-dot" size={15} color="#93959C" style={{margin:5}}/>
                        <Octicons name="primitive-dot" size={15} color="#93959C" style={{margin:5}}/>
                    </View>
                    {/* Temp view ends*/}
                    <View>
                        <Text style={{color:'#CBCDD0', fontSize:23, padding:20}}>Next week</Text>
                    </View>
                    <ScrollView>

                        <View style={{flexDirection:'row', justifyContent: 'space-between', width:'100%', padding:20, height:50, alignItems:'center'}}>
                            <View style={{width:90}}>
                                <Text style={{color:'#CBCDD0', paddingTop:10, fontSize:16}}>Sunday</Text>
                            </View>
                            <View style={{flexDirection:'row',}}>
                                <Text style={{color:'#CBCDD0', paddingTop:10, fontSize:16}}>28° </Text>
                                <Text style={{color:'#93959C', paddingTop:10, fontSize:16}}> 21°</Text>
                            </View>
                            <View>
                                <FontAwesome5 name="cloud-sun" size={24} color="orange" />
                            </View>
                        </View>

                        <View style={{flexDirection:'row', justifyContent: 'space-between', width:'100%', padding:20, height:50, alignItems:'center'}}>
                            <View style={{width:90}}>
                                <Text style={{color:'#CBCDD0', paddingTop:10, fontSize:16}}>Monday</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'#CBCDD0', paddingTop:10, fontSize:16}}>27° </Text>
                                <Text style={{color:'#93959C', paddingTop:10, fontSize:16}}> 20°</Text>
                            </View>
                            <View>
                                <FontAwesome5 name="cloud-sun" size={24} color="orange" />
                            </View>
                        </View>

                        <View style={{flexDirection:'row', justifyContent: 'space-between', width:'100%', padding:20, height:50, alignItems:'center'}}>
                            <View style={{width:90}}>
                                <Text style={{color:'#CBCDD0', paddingTop:10, fontSize:16}}>Tuesday</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'#CBCDD0', paddingTop:10, fontSize:16}}>25° </Text>
                                <Text style={{color:'#93959C', paddingTop:10, fontSize:16}}> 18°</Text>
                            </View>
                            <View>
                                <Feather name="download-cloud" size={24} color="#176F9F" />
                            </View>
                        </View>


                        <View style={{flexDirection:'row', justifyContent: 'space-between', width:'100%', padding:20, height:50, alignItems:'center'}}>
                            <View style={{width:90}}>
                                <Text style={{color:'#CBCDD0', paddingTop:10, fontSize:16}}>Wednesday</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'#CBCDD0', paddingTop:10, fontSize:16}}>28° </Text>
                                <Text style={{color:'#93959C', paddingTop:10, fontSize:16}}> 22°</Text>
                            </View>
                            <View>
                                <Feather name="sun" size={24} color="orange" />
                            </View>
                        </View>


                        <View style={{flexDirection:'row', justifyContent: 'space-between', width:'100%', padding:20, height:50, alignItems:'center'}}>
                            <View style={{width:90}}>
                                <Text style={{color:'#CBCDD0', paddingTop:10, fontSize:16}}>Thursday</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'#CBCDD0', paddingTop:10, fontSize:16}}>23° </Text>
                                <Text style={{color:'#93959C', paddingTop:10, fontSize:16}}> 18°</Text>
                            </View>
                            <View>
                                <Feather name="cloud-drizzle" size={24} color="white" />
                            </View>
                        </View>


                        <View style={{flexDirection:'row', justifyContent: 'space-between', width:'100%', padding:20, height:50, alignItems:'center'}}>
                            <View style={{width:90}}>
                                <Text style={{color:'#CBCDD0', paddingTop:10, fontSize:16}}>Friday</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'#CBCDD0', paddingTop:10, fontSize:16}}>23° </Text>
                                <Text style={{color:'#93959C', paddingTop:10, fontSize:16}}> 17°</Text>
                            </View>
                            <View>
                                <Feather name="cloud-drizzle" size={24} color="white" />
                            </View>
                        </View>
                        

                        <View style={{flexDirection:'row', justifyContent: 'space-between', width:'100%', padding:20, height:50, alignItems:'center'}}>
                            <View style={{width:90}}>
                                <Text style={{color:'#CBCDD0', paddingTop:10, fontSize:16}}>Saturday</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'#CBCDD0', paddingTop:10, fontSize:16}}>23° </Text>
                                <Text style={{color:'#93959C', paddingTop:10, fontSize:16}}> 17°</Text>
                            </View>
                            <View>
                                <FontAwesome5 name="cloud-sun" size={24} color="orange" />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            );
        }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232634',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  header: {
    marginTop: Constants.statusBarHeight,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    padding: 20

  },
  temp: {
    backgroundColor: '#2E3341',
    borderRadius: 10,
    margin: 10,
    padding: 20
  }
});
