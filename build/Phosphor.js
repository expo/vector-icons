"use client";
import { createPhosphorIconSet } from './createIconSetFromPhosphor';
import glyphMap from './vendor/react-native-vector-icons/glyphmaps/Phosphor.json';
const fontMap = {
    Regular: require('./vendor/react-native-vector-icons/Fonts/Phosphor-Regular.ttf'),
    Light: require('./vendor/react-native-vector-icons/Fonts/Phosphor-Light.ttf'),
    Fill: require('./vendor/react-native-vector-icons/Fonts/Phosphor-Fill.ttf'),
    Thin: require('./vendor/react-native-vector-icons/Fonts/Phosphor-Thin.ttf'),
    Bold: require('./vendor/react-native-vector-icons/Fonts/Phosphor-Bold.ttf'),
    Duotone: require('./vendor/react-native-vector-icons/Fonts/Phosphor-Duotone.ttf'),
};
export const PhosphorStyle = {
    regular: 'regular',
    light: 'light',
    fill: 'fill',
    thin: 'thin',
    bold: 'bold',
    duotone: 'duotone',
};
const iconSet = createPhosphorIconSet(glyphMap, fontMap);
export default iconSet;
//# sourceMappingURL=Phosphor.js.map