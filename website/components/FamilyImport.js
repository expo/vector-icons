import React from 'react';
import { StyleSheet, Text } from 'react-native';

const FamilyImport = ({ family }) => {
  return (
    <Text style={styles.instructions}>
      {`    import {
      ${family}
    } from '@expo/vector-icons';`}
    </Text>
  );
};

const styles = StyleSheet.create({
  instructions: {
    color: '#33691E',
    fontSize: 18,
    fontWeight: '400',
    marginVertical: 10,
  },
});

export default FamilyImport;
