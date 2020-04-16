import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, FlatList, TextInput } from 'react-native';
import { useDebouncedCallback } from 'use-debounce';
import { IconsArray } from '../IconConstants';
import ListItem from '../components/ListItem';
import { Ionicons } from '@expo/vector-icons';

function getIconsForQuery(query) {
  return IconsArray.filter(
    (icon) =>
      icon.name.includes(query) || icon.family.toLowerCase().includes(query)
  );
}

const List = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [listIcons, setListIcons] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    setListIcons(getIconsForQuery(''));
    inputRef.current?.focus();
  }, [query, inputRef]);

  const [handleOnChange] = useDebouncedCallback((query) => {
    setListIcons(getIconsForQuery(query.toLowerCase()));
  }, 250);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons
          name="md-search"
          size={30}
          color="black"
          style={styles.icon}
        />
        <TextInput
          key="stable"
          ref={inputRef}
          placeholder="Search for an icon or family"
          onChangeText={handleOnChange}
          style={styles.input}
        />
      </View>

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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(243, 229, 245,1)',
  },
  input: {
    padding: 10,
    width: '100%',
    fontSize: 18,
    outlineColor: 'rgba(243, 229, 245,1)',
  },
  icon: {
    padding: 10,
  },
});

export default List;
