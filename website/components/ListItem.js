import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from './Icon';

const ListItem = ({ name, family, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon family={family} name={name} size={30} />
        <View style={styles.textView}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.family}>{family}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingVertical: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
  },
  textView: {
    flexDirection: 'column',
    marginLeft: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  family: {
    fontSize: 13,
    fontWeight: 'normal',
  },
});

export default ListItem;
