import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { IconsArray } from '../IconConstants';
import ListItem from '../components/ListItem';
import { v1 as uuidv1 } from 'uuid';

const List = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [listIcons, setListIcons] = useState([]);
  let _input = null;

  useEffect(() => {
    setListIcons([]);
    _input.focus();
  }, [query]);

  const handleOnChange = () => {
    setListIcons(
      IconsArray.filter(
        (icon) =>
          icon.name.includes(query) || icon.family.toLowerCase().includes(query)
      )
    );
  };

  return (
    <View style={styles.container}>
      <Searchbar
        ref={(input) => (_input = input)}
        placeholder="Search for an icon or family"
        onChangeText={(query) => setQuery(query.toLowerCase())}
        value={query}
        autoCapitalize="none"
        onBlur={handleOnChange}
      />

      <FlatList
        data={listIcons}
        renderItem={({ item }) => {
          return (
            <ListItem
              family={item.family}
              name={item.name}
              onPress={() =>
                navigation.push('Details', {
                  family: item.family,
                  name: item.name,
                })
              }
            />
          );
        }}
        keyExtractor={(item) => item.name + item.value.toString() + uuidv1()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default List;
