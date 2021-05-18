import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from '../logo/LogoScreen';
import Input from '../SearchScreen/SearchScreen';
import Constants from 'expo-constants';

function HeaderScreen({navigation, onPress, weatherData}) {
  return (
    <View style={styles.container}>
      <Logo weatherData={weatherData}/>
      <Input onPress={onPress} />
    </View>
  );
}
export default HeaderScreen;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height : 60,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: Constants.statusBarHeight,
    padding: 20
  },
});
