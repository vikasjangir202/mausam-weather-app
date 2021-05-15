import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Block from '../forcastBlock/ForecastBlockScreen';
function ForecastScreen() {
    let [fontsLoaded] = useFonts({
        'Inter-Black': require('../../assets/fonts/Itim-Regular.ttf'),
      });
    
    if (!fontsLoaded) {
        return <AppLoading />;
    } 
    else {
        return (
        <ScrollView style={styles.container} horizontal>
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
        </ScrollView>
        );
    }
}
export default ForecastScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex:1,
    padding: 20,
    
  },
});
