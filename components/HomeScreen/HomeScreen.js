import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import HeaderScreen from '../header/HeaderScreen';
import WeatherScreen from '../weatherBox/WeatherScreen';
import Forecast from '../DailyForecast/ForecastScreen';

export default function HomeScreen({navigation}) {
  return (
      
    <View style={styles.container}>
        <HeaderScreen onPress={()=>navigation.navigate('Week')} />
        <WeatherScreen />
        <Forecast />
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6EFAE6',
  },
});
