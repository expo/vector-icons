import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

const FamilyImport = ({ family }) => {
  return (
    <Text style={styles.instructions} selectable>
      {`import { ${family} } from '@expo/vector-icons';`} </Text>
  );
};

const styles = StyleSheet.create({
  instructions: {
    ...Platform.select({
      web: {
        userSelect: 'all',
      },
    }),
    fontFamily: 'monospace',
    fontSize: 18,
    fontWeight: '400',
    marginVertical: 10,
  },
});

export default FamilyImport;
