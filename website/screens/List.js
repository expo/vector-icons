import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useDebouncedCallback } from 'use-debounce';
import { IconsArray } from '../IconConstants';
import ListItem from '../components/ListItem';

function getIconsForQuery(query) {
  return IconsArray.filter(
    (icon) =>
      icon.name.includes(query) || icon.family.toLowerCase().includes(query)
  );
}

const List = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [listIcons, setListIcons] = useState([]);
  const inputRef = React.useRef();

  useEffect(() => {
    setListIcons(getIconsForQuery(''));
    inputRef.current?.focus();
  }, [query, inputRef]);

  const [handleOnChange] = useDebouncedCallback((query) => {
    setListIcons(getIconsForQuery(query));
  }, 250);

  return (
    <View style={styles.container}>
      <Searchbar
        key="stable"
        ref={inputRef}
        placeholder="Search for an icon or family"
        onChangeText={handleOnChange}
        autoCapitalize="none"
      />

      <FlatList
        data={listIcons}
        renderItem={({ item }) => (
          <IconRow item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => `${item.family}-${item.name}`}
      />
    </View>
  );
};

const IconRow = React.memo(({ item, navigation }) => {
  return (
    <ListItem
      family={item.family}
      name={item.name}
      onPress={() => {
        navigation.navigate('Details', {
          family: item.family,
          name: item.name,
        });
      }}
    />
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default List;
