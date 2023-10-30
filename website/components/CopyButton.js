import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

const CopyButton = ({ copied = false, onPress, buttonName }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={{ alignSelf: 'center' }}>
        {copied ? (
          <View style={styles.copyIcon}>
            <FontAwesome6 name="check" color="#fff" size={14} />
          </View>
        ) : (
          <Text style={styles.copy}>{buttonName}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  copy: {
    fontWeight: '400',
    fontSize: 14,
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#000',
  },
  copyIcon: {
    backgroundColor: '#27D68B',
    paddingHorizontal: 12,
    paddingVertical: 1,
    borderWidth: 1,
    borderRadius: 3,
  },
});

export default CopyButton;
