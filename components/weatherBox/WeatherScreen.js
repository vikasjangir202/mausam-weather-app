import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

function WeatherScreen() {
    let [fontsLoaded] = useFonts({
        'Inter-Black': require('../../assets/fonts/Itim-Regular.ttf'),
      });
    
    if (!fontsLoaded) {
        return <AppLoading />;
    } 
    else {
        return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="weather-hail" size={150} color="#F1C91D" />
            <Text style={{fontSize:17, fontFamily:'Inter-Black', color:'#313061'}}>Cloudy</Text>
            <Text style={{fontSize:70, fontFamily:'Inter-Black', color:'#313061',  fontWeight:'bold'}}>28°</Text>
            <View style={{flexDirection:'row', width:'50%', justifyContent:'space-between'}}>
                <View style={{flexDirection:'row'}}>
                    <Feather name="wind" size={17} color="#313061" />
                    <Text style={{fontSize:17, fontFamily:'Inter-Black', color:'#313061'}}> 8 km/h</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Feather name="droplet" size={17} color="#313061" />
                    <Text style={{fontSize:17, fontFamily:'Inter-Black', color:'#313061'}}> 65 %</Text>
                </View>
            </View>
        </View>
        );
    }
}
export default WeatherScreen;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
});
