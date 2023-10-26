import { createFA6IconSet, FA6Style } from './createIconSetFromFontAwesome6';

import glyphMap from './vendor/react-native-vector-icons/glyphmaps/FontAwesome6Free.json';
import metadata from './vendor/react-native-vector-icons/glyphmaps/FontAwesome6Free_meta.json';
import { MultiStyleIcon } from './createMultiStyleIconSet';
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

const iconSet: MultiStyleIcon<keyof typeof glyphMap> = createFA6IconSet<keyof typeof glyphMap, 'regular' | 'solid' | 'brand'>(
    glyphMap,
    // @ts-ignore
    metadata,
    fontMap,
    false,
);

export { FA6Style };
export default iconSet;
