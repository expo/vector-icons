import _ from 'lodash';

export const IconFamilies = {
  AntDesign: require('react-native-vector-icons/glyphmaps/AntDesign.json'),
  Entypo: require('react-native-vector-icons/glyphmaps/Entypo.json'),
  EvilIcons: require('react-native-vector-icons/glyphmaps/EvilIcons.json'),
  Feather: require('react-native-vector-icons/glyphmaps/Feather.json'),
  FontAwesome: require('react-native-vector-icons/glyphmaps/FontAwesome.json'),
  FontAwesome5: require('react-native-vector-icons/glyphmaps/FontAwesome5Free.json'),
  Fontisto: require('react-native-vector-icons/glyphmaps/Fontisto.json'),
  Foundation: require('react-native-vector-icons/glyphmaps/Foundation.json'),
  Ionicons: require('react-native-vector-icons/glyphmaps/Ionicons.json'),
  MaterialIcons: require('react-native-vector-icons/glyphmaps/MaterialIcons.json'),
  MaterialCommunityIcons: require('react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json'),
  SimpleLineIcons: require('react-native-vector-icons/glyphmaps/SimpleLineIcons.json'),
  Octicons: require('react-native-vector-icons/glyphmaps/Octicons.json'),
  Zocial: require('react-native-vector-icons/glyphmaps/Zocial.json'),
};

const FA5Meta = require('react-native-vector-icons/glyphmaps/FontAwesome5Free_meta.json');

export const IconsArray = _.reduce(
  Object.keys(IconFamilies),
  (arr, family) => {
    let icons = IconFamilies[family];
    Object.keys(icons).forEach(iconName => {
      if (family === 'FontAwesome5') {
        Object.keys(FA5Meta).forEach(fa5style => {
          if (FA5Meta[fa5style].includes(iconName)) {
            arr.push({
              name: iconName,
              value: icons[iconName],
              style: fa5style,
              family
            });
          }
        });
      } else {
        arr.push({
          name: iconName,
          value: icons[iconName],
          family,
        });
      }
    });
    return arr;
  },
  []
);
