import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function SearchScreen({navigation, onPress}){
 
    return (
      <View>
        <TouchableHighlight onPress={onPress}>
          <AntDesign name="calendar" size={24} color="#313061" style={{margin:5}}  />
        </TouchableHighlight>
      </View>
    );
};

const styles = StyleSheet.create({
    input: {
        fontFamily:'Inter-Black', 
        fontSize : 20,
        borderWidth:1, 
        borderColor:'black',
        backgroundColor: '#232634',
        color : 'white',
        borderRadius: 50,
        paddingLeft : 10,
        paddingRight : 10,
      },
  });

export default SearchScreen;