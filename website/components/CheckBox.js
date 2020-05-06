import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CheckBox = ({
  icon = 'checkbox-blank-outline',
  label = 'checkbox',
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name={icon} size={18} color="black" />
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  label: {
    marginLeft: 3,
    fontSize: 18,
  },
});

export default CheckBox;
