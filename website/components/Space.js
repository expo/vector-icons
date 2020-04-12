import React from 'react';
import { StyleSheet, View } from 'react-native';

const Space = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});

export default Space;
