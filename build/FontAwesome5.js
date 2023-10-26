import { createFA5IconSet, FA5Style } from './createIconSetFromFontAwesome5';
import glyphMap from './vendor/react-native-vector-icons/glyphmaps/FontAwesome5Free.json';
import metadata from './vendor/react-native-vector-icons/glyphmaps/FontAwesome5Free_meta.json';
const fontMap = {
    Regular: require('./vendor/react-native-vector-icons/Fonts/FontAwesome5_Regular.ttf'),
    Light: require('./vendor/react-native-vector-icons/Fonts/FontAwesome5_Regular.ttf'),
    Solid: require('./vendor/react-native-vector-icons/Fonts/FontAwesome5_Solid.ttf'),
    Brand: require('./vendor/react-native-vector-icons/Fonts/FontAwesome5_Brands.ttf'),
};
const iconSet = createFA5IconSet(glyphMap, 
// @ts-ignore
metadata, fontMap, false);
export { FA5Style };
export default iconSet;
//# sourceMappingURL=FontAwesome5.js.map