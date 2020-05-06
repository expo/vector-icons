import _ from "lodash";

export const IconFamilies = {
  AntDesign: require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/AntDesign.json"),
  Entypo: require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Entypo.json"),
  EvilIcons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/EvilIcons.json"),
  Feather: require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Feather.json"),
  FontAwesome: require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/FontAwesome.json"),
  FontAwesome5: require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/FontAwesome5Free.json"),
  Foundation: require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Foundation.json"),
  Ionicons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Ionicons.json"),
  MaterialIcons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/MaterialIcons.json"),
  MaterialCommunityIcons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json"),
  SimpleLineIcons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/SimpleLineIcons.json"),
  Octicons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Octicons.json"),
  Zocial: require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Zocial.json"),
  Fontisto: require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Fontisto.json"),
};

export const IconsArray = _.reduce(
  Object.keys(IconFamilies),
  (arr, family) => {
    let icons = IconFamilies[family];
    Object.keys(icons).forEach((iconName) => {
      arr.push({
        name: iconName,
        value: icons[iconName],
        family,
      });
    });
    return arr;
  },
  []
);
