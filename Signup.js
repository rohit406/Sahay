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
  TouchableOpacity,
  onPress
} from "react-native";
import * as Animatable from "react-native-animatable";
import Header from "./Header";
export default function Signup() {
  return (
    <View style={styles.container}>
      <Header title="My Account" />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.tag}>Sign Up</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <TextInput
          style={styles.TextInput1}
          placeholder=" Email/Mobile Number"
        />
        <TextInput style={styles.TextInput1} placeholder=" Full Name" />
        <TextInput style={styles.TextInput1} placeholder=" Create Password" />
        <TextInput style={styles.TextInput1} placeholder=" Re Enter password" />
      </View>

     <Dummybttn title="Sign up"/>
      </View>

    

      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tag: {
    color: "orange",
    marginTop: 60,
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
  }
});
