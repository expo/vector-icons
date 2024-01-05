import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CheckBox = ({
  icon = 'checkbox-blank-outline',
  label = 'checkbox',
  onPress,
}) => {
  return (
    <Pressable onPress={() => onPress(label)} style={styles.container}>
      <MaterialCommunityIcons name={icon} size={20} color="black" />
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
    cursor: 'pointer',
  },
  label: {
    marginLeft: 3,
    fontSize: 18,
  },
});

export default CheckBox;
