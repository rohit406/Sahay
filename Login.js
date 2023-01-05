import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Dummybttn from "./Dummybttn";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Alert,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Header from "./Header";
export default function Login() {
  return (
    <View style={styles.container}>
      <Header title="My Account" />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.tag}>SAHAY</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <TextInput
          style={styles.TextInput1}
          placeholder="  Email/Mobile Number"
        />
        <TextInput style={styles.TextInput1} placeholder="  Password" />
      </View>

      
      <Dummybttn title="Sign In"/>
      <View style={{marginTop:20,alignItems:'center'}}>
        <Text style={{textDecorationLine:"underline",fontSize:15}}> Forgot Password ?</Text>
      </View>

      <View style={{marginTop:20,alignItems:'flex-start'}}>
        <Text style={{textDecorationLine:"underline",fontSize:15}}> New to Sahay ?</Text>
      </View>
      <Dummybttn title="Create your Account"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection:"row",
    //  backgroundColor:'orange',
    // height:50,
    // marginTop:20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  tag: {
    color: "orange",
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  TextInput1: {
    margin: 16,
    height: 42,
    borderColor: "orange",
    borderWidth: 1,
    borderRadius: 5,
  },

  styledButton: {
    backgroundColor: "orange",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "orange",
    height: 42
  },
});

