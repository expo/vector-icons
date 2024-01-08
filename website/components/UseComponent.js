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
    padding: 14,
    borderWidth: 1,
    borderColor: "#e3e3e3",
    borderRadius: 4,
    backgroundColor: "#fff",
  },
});

export default UseComponent;
