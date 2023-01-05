// const express=require
// ('express');

import React from "react";
import { useState } from "react";
import { Text,View,StyleSheet,StatusBar} from 'react-native'
import Login from "./components/Login"
import Signup from "./components/Signup";

export default function App(){

  return(
    <View style={styles.container}>
      <StatusBar
      barStyle="light-content"
      backgroundColor="orange"
      />
      <Login/>
    </View>
    
    
  )
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
    backgroundColor: 'white',
    // marginTop:20
  }
})