import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 20,
  },
  text: {
    color: '#bdc3c7',
    fontWeight: 'bold',
  },
});

const Chip = ({ value, color , pressable, onPress }) => (
  <TouchableOpacity
    disabled={!pressable}
    style={[styles.container,{backgroundColor:color}]}
    onPress={() => onPress(value)}
    key={value}
  >
    <Text style={styles.text}>{value}</Text>
  </TouchableOpacity>
);

export default Chip;
