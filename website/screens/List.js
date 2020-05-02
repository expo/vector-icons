import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, FlatList, TextInput, Text } from 'react-native';
import { useDebouncedCallback } from 'use-debounce';
import { IconsArray } from '../IconConstants';
import ListItem from '../components/ListItem';
import Display from '../components/Display';
import FilterButton from '../components/FilterButton';
import { Ionicons } from '@expo/vector-icons';
import Hotshot from 'hotshot';
import CheckBox from '../components/CheckBox';

function getIconsForQuery(query) {
  return IconsArray.filter(
    (icon) =>
      icon.name.includes(query) || icon.family.toLowerCase().includes(query)
  );
}

const List = ({ navigation }) => {
  const inputRef = useRef();
  const [query, setQuery] = useState('');
  const [barOpen, setBarOpen] = useState(true);
  const [listIcons, setListIcons] = useState([]);

  const [ant, setAnt] = useState(false);
  const [ent, setEnt] = useState(false);
  const [evil, setEvil] = useState(false);
  const [feather, setFeather] = useState(false);
  const [fontawe, setFontawe] = useState(false);
  const [fontawe5, setFontawe5] = useState(false);
  const [found, setFound] = useState(false);
  const [ioni, setIoni] = useState(false);
  const [material, setMaterial] = useState(false);
  const [matcom, setMatcom] = useState(false);
  const [sim, setSim] = useState(false);
  const [octi, setOcti] = useState(false);
  const [zocial, setZocial] = useState(false);

  useEffect(() => {
    setListIcons(getIconsForQuery(''));
    inputRef.current?.focus();
    hotshot;
  }, [query, inputRef]);

  const [handleOnChange] = useDebouncedCallback((query) => {
    setListIcons(getIconsForQuery(query.toLowerCase()));
  }, 250);

  const hotshot = new Hotshot({
    combos: [
      {
        keyCodes: [191], // open search by pressing / key
        callback: () => setTimeout(() => inputRef.current?.focus(), 16),
      },
    ],
  });

  const handleFilterButton = () => {
    setBarOpen(!barOpen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons
          name="md-search"
          size={30}
          color="#FFFFFF"
          style={styles.icon}
        />
        <TextInput
          key="stable"
          ref={inputRef}
          placeholder="Search for an icon or family"
          placeholderTextColor="#757575"
          onChangeText={handleOnChange}
          style={styles.input}
          selectTextOnFocus
        />
      </View>

      {/* Filter section */}
      <View style={styles.filterContainer}>
        {/* Keys instruction */}

        {/* Filter button */}
        <FilterButton
          buttonColor={barOpen ? '#447181' : '#515460'}
          onPress={handleFilterButton}
        />
      </View>
      <Display enable={barOpen}>
        <View style={styles.displayContainer}>
          <View style={styles.familySection}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 20,
                marginBottom: 10,
                alignSelf: 'center',
              }}>
              Icons Family
            </Text>

            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                {/* meter checkbox o similar */}
                <View style={{ flexDirection: 'column' }}>
                  <CheckBox
                    label="AntDesign"
                    icon={ant ? 'checkbox-marked' : 'checkbox-blank-outline'}
                    onPress={() => setAnt(!ant)}
                  />

                  <CheckBox
                    label="Entypo"
                    icon={ent ? 'checkbox-marked' : 'checkbox-blank-outline'}
                    onPress={() => setEnt(!ent)}
                  />

                  <CheckBox
                    label="EvilIcons"
                    icon={evil ? 'checkbox-marked' : 'checkbox-blank-outline'}
                    onPress={() => setEvil(!evil)}
                  />

                  <CheckBox
                    label="Feather"
                    icon={
                      feather ? 'checkbox-marked' : 'checkbox-blank-outline'
                    }
                    onPress={() => setFeather(!feather)}
                  />
                </View>

                <View style={{ flexDirection: 'column' }}>
                  <CheckBox
                    label="FontAwesome"
                    icon={
                      fontawe ? 'checkbox-marked' : 'checkbox-blank-outline'
                    }
                    onPress={() => setFontawe(!fontawe)}
                  />

                  <CheckBox
                    label="FontAwesome5"
                    icon={
                      fontawe5 ? 'checkbox-marked' : 'checkbox-blank-outline'
                    }
                    onPress={() => setFontawe5(!fontawe5)}
                  />

                  <CheckBox
                    label="Foundation"
                    icon={found ? 'checkbox-marked' : 'checkbox-blank-outline'}
                    onPress={() => setFound(!found)}
                  />

                  <CheckBox
                    label="Ionicons"
                    icon={ioni ? 'checkbox-marked' : 'checkbox-blank-outline'}
                    onPress={() => setIoni(!ioni)}
                  />
                </View>

                <View style={{ flexDirection: 'column' }}>
                  <CheckBox
                    label="MaterialIcons"
                    icon={
                      material ? 'checkbox-marked' : 'checkbox-blank-outline'
                    }
                    onPress={() => setMaterial(!material)}
                  />

                  <CheckBox
                    label="MaterialCommunityIcons"
                    icon={matcom ? 'checkbox-marked' : 'checkbox-blank-outline'}
                    onPress={() => setMatcom(!matcom)}
                  />

                  <CheckBox
                    label="SimpleLineIcons"
                    icon={sim ? 'checkbox-marked' : 'checkbox-blank-outline'}
                    onPress={() => setSim(!sim)}
                  />

                  <CheckBox
                    label="Octicons"
                    icon={octi ? 'checkbox-marked' : 'checkbox-blank-outline'}
                    onPress={() => setOcti(!octi)}
                  />
                </View>

                <View style={{ flexDirection: 'column' }}>
                  <CheckBox
                    label="Zocial"
                    icon={zocial ? 'checkbox-marked' : 'checkbox-blank-outline'}
                    onPress={() => setZocial(!zocial)}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </Display>

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
    backgroundColor: '#2A2C33',
  },
  input: {
    padding: 10,
    width: '100%',
    fontSize: 18,
    color: '#fff',
    outlineColor: '#2A2C33',
  },
  icon: {
    padding: 10,
  },
  filterContainer: {
    height: 40,
    backgroundColor: '#2A2C33',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
  displayContainer: {
    backgroundColor: '#ececec',
    height: 130,
  },
  familySection: {
    paddingLeft: 20,
    paddingTop: 10,
  },
});

export default List;
