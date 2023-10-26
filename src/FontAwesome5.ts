import { createMultiStyleFAiconSet } from './createIconSetFromMultiStyleFontAwesome';

import glyphMap from './vendor/react-native-vector-icons/glyphmaps/FontAwesome5Free.json';
import metadata from './vendor/react-native-vector-icons/glyphmaps/FontAwesome5Free_meta.json';
const fontMap = {
  Regular: require('./vendor/react-native-vector-icons/Fonts/FontAwesome5_Regular.ttf'),
  Light: require('./vendor/react-native-vector-icons/Fonts/FontAwesome5_Regular.ttf'),
  Solid: require('./vendor/react-native-vector-icons/Fonts/FontAwesome5_Solid.ttf'),
  Brand: require('./vendor/react-native-vector-icons/Fonts/FontAwesome5_Brands.ttf'),
};

export const FA5Style = {
  regular: 'regular',
  light: 'light',
  solid: 'solid',
  brand: 'brand',
};

const iconSet = createMultiStyleFAiconSet(glyphMap, metadata, fontMap, 5, false);

export default iconSet;
