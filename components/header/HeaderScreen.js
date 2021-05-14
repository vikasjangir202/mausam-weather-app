import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from '../logo/LogoScreen';
import Input from '../SearchScreen/SearchScreen';

function HeaderScreen() {
  return (
    <View style={styles.container}>
      <Logo />
      <Input />
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
    marginTop : 30,
    padding: 20
  },
});
