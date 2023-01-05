import React, {useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { StyleSheet, Text, View,Button,TextInput,ScrollView ,FlatList, Alert,Image} from 'react-native';
import { Icon } from '@rneui/base';
export default function Header({title}){
    return(
    <View style={styles.container}>  
       <View>
        <Icon
        type="material-community"
        name="arrow-left"
        color="white"
        size={30}
        marginTop={5}
        onPress={()=>{}}
        />
       </View>

       <View>
        <Text style={styles.Text}>{title}</Text>
       </View>
        </View>
);
}

const styles = StyleSheet.create({
    container: {
      flexDirection:"row",
      backgroundColor:'orange',
      height:50,
      // marginTop:20
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    Text: {
      color:"white",
      fontSize:28,
      marginLeft:30,
      fontWeight:"bold"
    }
 
  
   
  
  });
 