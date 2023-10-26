import { createMultiStyleFAiconSet } from './createIconSetFromMultiStyleFontAwesome';

import glyphMap from './vendor/react-native-vector-icons/glyphmaps/FontAwesome6Free.json';
import metadata from './vendor/react-native-vector-icons/glyphmaps/FontAwesome6Free_meta.json';
const fontMap = {
  Regular: require('./vendor/react-native-vector-icons/Fonts/FontAwesome6_Regular.ttf'),
  Light: require('./vendor/react-native-vector-icons/Fonts/FontAwesome6_Regular.ttf'),
  Solid: require('./vendor/react-native-vector-icons/Fonts/FontAwesome6_Solid.ttf'),
  Brand: require('./vendor/react-native-vector-icons/Fonts/FontAwesome6_Brands.ttf'),
  Sharp: require('./vendor/react-native-vector-icons/Fonts/FontAwesome6_Regular.ttf'),
  SharpLight: require('./vendor/react-native-vector-icons/Fonts/FontAwesome6_Regular.ttf'),
  SharpSolid: require('./vendor/react-native-vector-icons/Fonts/FontAwesome6_Regular.ttf'),
  Duotone: require('./vendor/react-native-vector-icons/Fonts/FontAwesome6_Regular.ttf'),
  Thin: require('./vendor/react-native-vector-icons/Fonts/FontAwesome6_Regular.ttf'),
};

export const FA6Style = {
  regular: 'regular',
  light: 'light',
  solid: 'solid',
  brand: 'brand',
  sharpLight: 'light',
  sharp: 'regular',
  sharpSolid: 'solid',
  duotone: 'duotone',
  thin: 'light',
};

const iconSet = createMultiStyleFAiconSet(glyphMap, metadata, fontMap, 6, false);

export default iconSet;
