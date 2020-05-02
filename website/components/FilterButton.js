import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const FilterButton = ({ buttonColor, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.filterButton, { backgroundColor: buttonColor }]}>
      <AntDesign
        name="filter"
        size={16}
        color="#fff"
        style={{ marginRight: 5 }}
      />
      <Text style={styles.filterText}>Filters</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  filterText: {
    color: '#fff',
    fontSize: 16,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#515460',
    width: 90,
    paddingVertical: 5,
  },
});

export default FilterButton;
