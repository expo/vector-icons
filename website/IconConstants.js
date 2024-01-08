export const IconFamilies = {
  AntDesign: require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/AntDesign.json"),
  Entypo: require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Entypo.json"),
  EvilIcons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/EvilIcons.json"),
  Feather: require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Feather.json"),
  FontAwesome: require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/FontAwesome.json"),
  FontAwesome5: require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/FontAwesome5Free.json"),
  FontAwesome6: require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/FontAwesome6Free.json"),
  Fontisto: require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Fontisto.json"),
  Foundation: require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Foundation.json"),
  Ionicons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Ionicons.json"),
  MaterialIcons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/MaterialIcons.json"),
  MaterialCommunityIcons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json"),
  Octicons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Octicons.json"),
  SimpleLineIcons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/SimpleLineIcons.json"),
  Zocial: require("@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Zocial.json"),
};

export const IconsArray = Object.keys(IconFamilies).reduce((arr, family) => {
  let icons = IconFamilies[family];
  return [
    ...arr,
    ...Object.entries(icons).map(([iconName, glyphValue]) => {
      return {
        name: iconName,
        value: glyphValue,
        family,
      };
    })
  ];
}, []);
