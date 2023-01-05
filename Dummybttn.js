import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function Dummybttn(props) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 12,
    // paddingHorizontal: 32,
    // borderRadius: 4,
    // elevation: 3,
    // backgroundColor: 'orange',
    // width:"100%"
    backgroundColor: 'orange',
    margin: 16,
    height: 42,
    borderColor: "orange",
    borderWidth: 1,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});