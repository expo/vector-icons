import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import PressableOpacity from "./PressableOpacity";

const FilterButton = ({ barOpen, onPress }) => {
  return (
    <PressableOpacity
      onPress={onPress}
      style={[styles.filterButton, barOpen && styles.filterButtonActive]}>
      <AntDesign
        name="filter"
        size={16}
        color={barOpen ? "#000" : "#fff"}
      />
      <Text style={[styles.filterText, barOpen && styles.filterTextActive]}>Filters</Text>
    </PressableOpacity>
  );
};

const styles = StyleSheet.create({
  filterText: {
    color: '#fff',
    fontSize: 16,
  },
  filterTextActive: {
    color: '#000',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#515460',
    width: 90,
    paddingVertical: 5,
    borderRadius: 4,
    gap: 5,
  },
  filterButtonActive: {
    backgroundColor: '#61dafb'
  }
});

export default FilterButton;
