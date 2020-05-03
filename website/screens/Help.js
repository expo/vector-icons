import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useMediaQuery } from 'react-responsive';

const Help = ({ navigation }) => {
  let isDesktop = useMediaQuery({ query: '(min-width: 900px)' });

  return (
    <View
      style={[styles.container, { marginHorizontal: isDesktop ? 200 : 10 }]}>
      <Text>hola</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#000',
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default Help;
