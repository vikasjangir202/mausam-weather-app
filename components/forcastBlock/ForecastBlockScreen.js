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
                    <Text style={{fontSize:17, fontFamily:'Inter-Black', color:'#313061', marginBottom:20}}>Today, 15 May</Text>
                </View>
                <View style={styles.bottomBlock}>
                    <View style={{paddingTop:5, paddingBottom:5}}>
                        <Text style={{fontSize:12, fontFamily:'Inter-Black', color:'#313061'}}>9:00 AM</Text>
                    </View>
                    <View style={{paddingTop:5, paddingBottom:5}}>
                        <MaterialCommunityIcons name="weather-hail" size={50} color="white" />
                    </View>
                    <View style={{paddingTop:5, paddingBottom:5}}>
                        <Text style={{fontSize:25, fontFamily:'Inter-Black', color:'#313061', fontWeight:'bold'}}>28°</Text>
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
    padding: 15,
  },
  bottomBlock: {
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor:'#95F6F5',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 5,
    paddingBottom: 15,
    borderRadius:10,
  }
});
