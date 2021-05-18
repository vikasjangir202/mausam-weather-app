import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, View } from 'react-native';
import HeaderScreen from '../header/HeaderScreen';
import WeatherScreen from '../weatherBox/WeatherScreen';
import Forecast from '../DailyForecast/ForecastScreen';
import { useState, useEffect } from 'react';

export default function HomeScreen({navigation}) {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);
  
  async function  getWeather (city) {
    console.log(city);
    await fetch('https://api.openweathermap.org/data/2.5/weather?q=Sardarshahar, Rajasthan&appid=&units=metric')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }


  if(loading){
    return <AppLoading 
            startAsync={getWeather}
            onFinish={() => setLoading(false)}
            onError={console.warn}
          />;
  }
  else {
    return (
      
      <View style={styles.container}>
          <HeaderScreen onPress={()=>navigation.navigate('Week')} weatherData={data} />
          <WeatherScreen weatherData={data} />
          <Forecast />
          <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#72EFED',
  },
});
