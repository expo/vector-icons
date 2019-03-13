import { createFA5iconSet } from './createIconSetFromFontAwesome5';
import glyphMap from './vendor/react-native-vector-icons/glyphmaps/FontAwesome5Free.json';
import metadata from './vendor/react-native-vector-icons/glyphmaps/FontAwesome5Free_meta.json';
const fontMap = {
    Regular: require('./vendor/react-native-vector-icons/Fonts/FontAwesome5_Regular.ttf'),
    Light: require('./vendor/react-native-vector-icons/Fonts/FontAwesome5_Regular.ttf'),
    Solid: require('./vendor/react-native-vector-icons/Fonts/FontAwesome5_Solid.ttf'),
    Brand: require('./vendor/react-native-vector-icons/Fonts/FontAwesome5_Brands.ttf'),
};
export { FA5Style } from './vendor/react-native-vector-icons/lib/create-icon-set-from-fontawesome5';
const iconSet = createFA5iconSet(glyphMap, metadata, fontMap, false);
export default iconSet;
//# sourceMappingURL=FontAwesome5.js.map