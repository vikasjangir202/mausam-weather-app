import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function LogoScreen() {
    let [fontsLoaded] = useFonts({
        'Inter-Black': require('../../assets/fonts/Itim-Regular.ttf'),
      });
    
        if (!fontsLoaded) {
            return <AppLoading />;
        } else {
            return (
                <View style={styles.container}>
                  <Entypo name="location-pin" size={24} color="#313061" style={{margin:5}} />
                  <Text style={{fontSize:20, color: '#313061', fontFamily:'Inter-Black', margin:5, fontWeight:'bold'}}>Sardar Shahar</Text>
                  <MaterialIcons name="keyboard-arrow-down" size={24} color="#313061" style={{margin:5}} />
                </View>
            );
        }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
});
