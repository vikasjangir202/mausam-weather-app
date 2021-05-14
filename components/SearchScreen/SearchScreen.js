import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function SearchScreen(){
 
    return (
      <View>
          <AntDesign name="calendar" size={24} color="black" style={{margin:5}} onPress={()=> alert('Hello')} />
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