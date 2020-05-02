import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ClearButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.clearButton}>
      <AntDesign
        name="close"
        size={16}
        color="#fff"
        style={{ marginRight: 5 }}
      />
      <Text style={styles.clearText}>Clear filters</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  clearText: {
    color: '#fff',
    fontSize: 16,
  },
  clearButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#515460',
    width: 120,
    paddingVertical: 5,
  },
});

export default ClearButton;
