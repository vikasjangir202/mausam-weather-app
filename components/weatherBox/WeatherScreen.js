import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

function WeatherScreen({weatherData}) {
    let [fontsLoaded] = useFonts({
        'Inter-Black': require('../../assets/fonts/Itim-Regular.ttf'),
      });
    
      let weatherIcon = weatherData.weather[0].icon;
      weatherIcon = "http://openweathermap.org/img/w/" +weatherIcon+ ".png";

    if (!fontsLoaded) {
        return <AppLoading />;
    } 
    else {
        return (
        <View style={styles.container}>
            <Image
                source={{uri:weatherIcon}}
                style={{width:150, height:150}}
            />
            <Text style={{fontSize:17, fontFamily:'Inter-Black', color:'#313061'}}>{weatherData.weather[0].main}</Text>
            <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'flex-end'}}>
                <Text style={{fontSize:70, fontFamily:'Inter-Black', color:'#313061',  fontWeight:'bold'}}>{Math.floor(weatherData.main.temp)}°</Text>
                <Text style={{fontSize:20, fontFamily:'Inter-Black', color:'#313061', marginBottom:13, fontWeight:'700'}}>Celsius</Text>
            </View>
            <View style={{flexDirection:'row', width:'50%', justifyContent:'space-between'}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Feather name="wind" size={17} color="#313061" />
                    <Text style={{fontSize:17, fontFamily:'Inter-Black', color:'#313061'}}> {weatherData.wind.speed} km/h</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Feather name="droplet" size={17} color="#313061" />
                    <Text style={{fontSize:17, fontFamily:'Inter-Black', color:'#313061'}}> {weatherData.main.humidity} %</Text>
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
