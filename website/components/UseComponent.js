import React from 'react';
import { StyleSheet, Text } from 'react-native';

const UseComponent = ({ family, name }) => {
  return (
    <Text style={styles.instructions}>{`    <${family}
        name="${name}"
        size={24}
        color="black"
    />`}</Text>
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

export default UseComponent;
