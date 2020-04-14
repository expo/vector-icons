import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

const UseComponent = ({ family, name }) => {
  return (
    <Text style={styles.instructions}>{
`<${family} name="${name}" size={24} color="black" />`}</Text>
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

export default UseComponent;
