import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import PressableOpacity from "./PressableOpacity";

const ClearButton = ({ onPress, disabled }) => {
  return (
    <PressableOpacity onPress={onPress} style={[styles.clearButton, disabled && styles.clearButtonDisabled]} disabled={disabled}>
      <AntDesign
        name="close"
        size={16}
        color="#fff"
      />
      <Text style={styles.clearText}>Clear filters</Text>
    </PressableOpacity>
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
    borderRadius: 4,
    gap: 5,
    width: 120,
    paddingVertical: 5,
  },
  clearButtonDisabled: {
    opacity: 0.6
  }
});

export default ClearButton;
