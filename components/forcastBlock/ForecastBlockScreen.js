import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

function ForecastBlockScreen() {
    let [fontsLoaded] = useFonts({
        'Inter-Black': require('../../assets/fonts/Itim-Regular.ttf'),
      });
    
    if (!fontsLoaded) {
        return <AppLoading />;
    } 
    else {
        return (
            <View style={styles.container}>
                <View>
                    <Text>Today, 15 May</Text>
                </View>
                <View style={styles.bottomBlock}>
                    <View>
                        <Text>9:00 AM</Text>
                    </View>
                    <View>
                        <MaterialCommunityIcons name="weather-hail" size={50} color="white" />
                    </View>
                    <View>
                        <Text>28°</Text>
                    </View>
                </View>
            </View>
        );
    }
}
export default ForecastBlockScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  bottomBlock: {
    backgroundColor:'#95F6F5'
  }
});
