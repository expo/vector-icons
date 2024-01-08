import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import PressableOpacity from "./PressableOpacity";

const CopyButton = ({ onPress, buttonName = 'COPY' }) => {
  return (
    <View style={styles.container}>
      <PressableOpacity onPress={onPress} style={{ alignSelf: 'center' }}>
        <Text style={styles.copy}>{buttonName}</Text>
      </PressableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  copy: {
    marginLeft: 14,
    fontWeight: '600',
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    color: '#fff',
    backgroundColor: '#06bcee',
  },
});

export default CopyButton;
