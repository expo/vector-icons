import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const CopyButton = ({ onPress, buttonName }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={{ alignSelf: 'center' }}>
        <Text style={styles.copy}>{buttonName}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  copy: {
    marginLeft: 10,
    fontWeight: '400',
    fontSize: 14,
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#000',
  },
});

export default CopyButton;
