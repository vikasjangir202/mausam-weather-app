import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderScreen from '../header/HeaderScreen';
import WeatherScreen from '../weatherBox/WeatherScreen';
import Forecast from '../DailyForecast/ForecastScreen';

export default function HomeScreen() {
  return (
      
    <View style={styles.container}>
        <HeaderScreen />
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
