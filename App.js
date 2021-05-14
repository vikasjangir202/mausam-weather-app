import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderScreen from './components/header/HeaderScreen';
import WeatherScreen from './components/weatherBox/WeatherScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <HeaderScreen />
      <WeatherScreen />
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
