import { createFA6iconSet } from './createIconSetFromFontAwesome6';
import glyphMap from './vendor/react-native-vector-icons/glyphmaps/FontAwesome6Free.json';
import metadata from './vendor/react-native-vector-icons/glyphmaps/FontAwesome6Free_meta.json';
const fontMap = {
    Regular: require('./vendor/react-native-vector-icons/Fonts/FontAwesome6_Regular.ttf'),
    Light: require('./vendor/react-native-vector-icons/Fonts/FontAwesome6_Regular.ttf'),
    Solid: require('./vendor/react-native-vector-icons/Fonts/FontAwesome6_Solid.ttf'),
    Brands: require('./vendor/react-native-vector-icons/Fonts/FontAwesome6_Brands.ttf'),
    Sharp_Regular: require('./vendor/react-native-vector-icons/Fonts/FontAwesome6_Regular.ttf'),
    Sharp_Light: require('./vendor/react-native-vector-icons/Fonts/FontAwesome6_Regular.ttf'),
    Sharp_Solid: require('./vendor/react-native-vector-icons/Fonts/FontAwesome6_Solid.ttf'),
    Duotone: require('./vendor/react-native-vector-icons/Fonts/FontAwesome6_Solid.ttf'),
    Thin: require('./vendor/react-native-vector-icons/Fonts/FontAwesome6_Regular.ttf'),
};
export const FA6Style = {
    regular: 'regular',
    light: 'light',
    solid: 'solid',
    brand: 'brand',
    sharp: 'sharp',
    sharpLight: 'sharpLight',
    sharpSolid: 'sharpSolid',
    duotone: 'duotone',
    thin: 'thin',
};
const iconSet = createFA6iconSet(glyphMap, metadata, fontMap, false);
export default iconSet;
//# sourceMappingURL=FontAwesome6.js.map