import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import { StyleSheet, View, FlatList, TextInput, Text } from "react-native";
import { useDebouncedCallback } from "use-debounce";
import { useMediaQuery } from "react-responsive";
import { IconsArray } from "../IconConstants";
import ListItem from "../components/ListItem";
import FilterButton from "../components/FilterButton";
import ClearButton from "../components/ClearButton";
import HelpButton from "../components/HelpButton";
import { Ionicons } from "@expo/vector-icons";
import Hotshot from "hotshot";
import CheckBox from "../components/CheckBox";

const DefaultIconFamilyFilters = {
  AntDesign: false,
  Entypo: false,
  EvilIcons: false,
  Feather: false,
  FontAwesome: false,
  FontAwesome5: false,
  Foundation: false,
  Ionicons: false,
  MaterialIcons: false,
  MaterialCommunityIcons: false,
  SimpleLineIcons: false,
  Octicons: false,
  Zocial: false,
  Fontisto: false,
};

function _FilterBar(props, ref) {
  const [iconFamilyFilters, setIconFamilyFilters] = useState({
    ...DefaultIconFamilyFilters,
  });

  function toggleIconFamilyFilter(name) {
    setIconFamilyFilters({
      ...iconFamilyFilters,
      [name]: !iconFamilyFilters[name],
    });
  }

  // Debounce updating filters
  useEffect(() => {
    const handler = setTimeout(() => {
      props.onFiltersChange(iconFamilyFilters);
    }, 150);

    return () => {
      clearTimeout(handler);
    };
  }, [iconFamilyFilters]);

  useImperativeHandle(ref, () => ({
    clear: () => setIconFamilyFilters({ ...DefaultIconFamilyFilters }),
  }));

  return (
    <View
      style={[
        styles.displayContainer,
        { display: props.isVisible ? "block" : "none" },
      ]}
    >
      <View style={styles.familySection}>
        <View>
          <View style={styles.checkDisplay}>
            {Object.keys(iconFamilyFilters).sort().map((familyName) => (
              <CheckBox
                key={familyName}
                label={familyName}
                icon={
                  iconFamilyFilters[familyName]
                    ? "checkbox-marked"
                    : "checkbox-blank-outline"
                }
                onPress={toggleIconFamilyFilter}
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

const FilterBar = React.memo(forwardRef(_FilterBar));

function _SearchBar(props, ref) {
  const [isFocussed, setIsFocussed] = useState(false);
  return (
    <View style={styles.searchContainer}>
      <Ionicons
        name="md-search"
        size={30}
        color="#FFFFFF"
        style={styles.icon}
      />
      <TextInput
        key="stable"
        ref={ref}
        placeholder="Search for an icon or family"
        onFocus={() => setIsFocussed(true)}
        onBlur={() => setIsFocussed(false)}
        placeholderTextColor="#757575"
        onChangeText={props.onChangeText}
        style={[styles.input, isFocussed ? styles.focussed : {}]}
        selectTextOnFocus
      />
    </View>
  );
}

const SearchBar = React.memo(forwardRef(_SearchBar));

function List({ navigation }) {
  const inputRef = useRef();
  const [query, setQuery] = useState("");
  const [barOpen, setBarOpen] = useState(false);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  useEffect(() => {
    new Hotshot({
      combos: [
        {
          keyCodes: [191], // open search by pressing / key
          callback: () => setTimeout(() => inputRef.current?.focus(), 16),
        },
      ],
    });
  }, [inputRef.current]);

  const [handleOnChange] = useDebouncedCallback(
    (query) => setQuery(query),
    250
  );

  const handleFilterButton = () => {
    setBarOpen(!barOpen);
  };

  const filterBarRef = useRef(null);
  const isDesktop = useMediaQuery({ query: "(min-width: 900px)" });
  const inputContainerOnMobile = {
    flexDirection: "column",
  }

  const MemoizedFilterToggles = React.useMemo(
    () => (
      <View style={styles.filterContainer}>
        <View style={{ flexDirection: "row" }}>
          <FilterButton
            buttonColor={barOpen ? "#447181" : "#515460"}
            onPress={handleFilterButton}
          />

          <View style={{ marginLeft: 10 }}>
            <ClearButton onPress={() => filterBarRef.current.clear()} />
          </View>
        </View>
      </View>
    ),
    [handleFilterButton, barOpen, filterBarRef.current]
  );

  return (
    <View style={styles.container}>
      <View>
        <View style={[styles.inputContainer, isDesktop ? {} : inputContainerOnMobile]}>
          <SearchBar onChangeText={handleOnChange} ref={inputRef} />
          {MemoizedFilterToggles}
        </View>
      </View>
      <FilterBar
        isVisible={barOpen}
        ref={filterBarRef}
        onFiltersChange={setFilters}
      />

      <IconList query={query} filters={filters} navigation={navigation} />
    </View>
  );
}

const IconList = React.memo(({ query, filters, navigation }) => {
  useEffect(() => {
    setIcons(getIconsForQuery(query.toLowerCase(), filters));
  }, [query, filters]);

  const [icons, setIcons] = useState([]);
  console.log('====================================');
  console.log(icons);
  console.log('====================================');

  const renderItem = React.useCallback(
    ({ item }) => {
      return <IconRow item={item} navigation={navigation} />;
    },
    [navigation]
  );
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const isLargeDesktop = useMediaQuery({ query: "(min-width: 1200px)" });

  return (
    <FlatList
      contentContainerStyle={{ gap: 10, paddingLeft: 10, paddingVertical: 10 }}
      data={icons}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      numColumns={isDesktop ? (isLargeDesktop ? 8 : 4) : 2}
      key={isDesktop ? (isLargeDesktop ? "largeDesktop" : "desktop") : "mobile"}
    />
  );
});

function keyExtractor(item) {
  return `${item.family}-${item.name}`;
}

const IconRow = React.memo(({ item, navigation }) => {
  return (
    <ListItem
      family={item.family}
      name={item.name}
      onPress={() => {
        navigation.navigate("Details", {
          family: item.family,
          name: item.name,
        });
      }}
    />
  );
});

function contains(target, pattern) {
  let value = 0;
  pattern.forEach((word) => {
    value = value + target.includes(word);
  });
  return value === 1;
}

function getIconsForQuery(query, iconFamilyFilters) {
  const isFamilyFilterActive =
    Object.values(iconFamilyFilters).filter(Boolean).length > 0;
  const filteredByFamily = !isFamilyFilterActive
    ? IconsArray
    : IconsArray.filter((icon) => {
      return iconFamilyFilters[icon.family];
    });

  return filteredByFamily.filter((icon) => {
    return icon.name.toLowerCase().includes(query);
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: "100%",
  },
  inputContainer: {
    flex: 1,
    position: "relative",
    // zIndex: 1000,
    flexDirection: "row",
    borderColor: "#2A2C33",
    width: "100%",
  },
  searchContainer: {
    flex: 40,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#2A2C33",
  },
  input: {
    marginLeft: 20,
    padding: 10,
    paddingLeft: 0,
    width: "100%",
    fontSize: 18,
    color: "#fff",
    outlineWidth: 0,
  },
  focussed: {
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
  },
  icon: {
    width: 30,
    height: 30,
    textAlign: "center",
  },
  filterContainer: {
    backgroundColor: "#2A2C33",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 50,
  },
  displayContainer: {
    backgroundColor: "#ececec",
  },
  familySection: {
    paddingTop: 10,
  },
  checkDisplay: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingHorizontal: 80,
    marginBottom: 10,
  },
  titleDisplay: {
    fontWeight: "600",
    fontSize: 20,
    marginBottom: 10,
    alignSelf: "center",
  },
});

export default List;
