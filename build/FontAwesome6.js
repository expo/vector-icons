import { createFA6iconSet } from "./createIconSetFromFontAwesome6";
import glyphMap from "./vendor/react-native-vector-icons/glyphmaps/FontAwesome6Free.json";
import metadata from "./vendor/react-native-vector-icons/glyphmaps/FontAwesome6Free_meta.json";
const fontMap = {
    Regular: require('./vendor/react-native-vector-icons/Fonts/FontAwesome6_Regular.ttf'),
    Light: require('./vendor/react-native-vector-icons/Fonts/FontAwesome6_Regular.ttf'),
    Solid: require('./vendor/react-native-vector-icons/Fonts/FontAwesome6_Solid.ttf'),
    Brand: require('./vendor/react-native-vector-icons/Fonts/FontAwesome6_Brands.ttf'),
};
export const FA6Style = {
    regular: "regular",
    light: "light",
    solid: "solid",
    brand: "brand",
};
const iconSet = createFA6iconSet(glyphMap, metadata, fontMap, false);
export default iconSet;
export const { Button, getImageSource, getImageSourceSync } = iconSet;
//# sourceMappingURL=FontAwesome6.js.map