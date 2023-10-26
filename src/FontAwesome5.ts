import { createFA5IconSet, FA5Style } from './createIconSetFromFontAwesome5';

import glyphMap from './vendor/react-native-vector-icons/glyphmaps/FontAwesome5Free.json';
import metadata from './vendor/react-native-vector-icons/glyphmaps/FontAwesome5Free_meta.json';
import { MultiStyleIcon } from './createMultiStyleIconSet';
const fontMap = {
  Regular: require('./vendor/react-native-vector-icons/Fonts/FontAwesome5_Regular.ttf'),
  Light: require('./vendor/react-native-vector-icons/Fonts/FontAwesome5_Regular.ttf'),
  Solid: require('./vendor/react-native-vector-icons/Fonts/FontAwesome5_Solid.ttf'),
  Brand: require('./vendor/react-native-vector-icons/Fonts/FontAwesome5_Brands.ttf'),
};

const iconSet: MultiStyleIcon<keyof typeof glyphMap> = createFA5IconSet<keyof typeof glyphMap, 'regular' | 'solid' | 'brand'>(
    glyphMap,
    // @ts-ignore
    metadata,
    fontMap,
    false,
);

export { FA5Style };
export default iconSet;
