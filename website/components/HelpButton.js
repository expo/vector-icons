import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const HelpButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.helpButton}>
      <AntDesign
        name="questioncircleo"
        size={16}
        color="#fff"
        style={{ marginRight: 5 }}
      />
      <Text style={styles.helpText}>Help</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  helpText: {
    color: '#fff',
    fontSize: 16,
  },
  helpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#515460',
    width: 90,
    paddingVertical: 5,
  },
});

export default HelpButton;
