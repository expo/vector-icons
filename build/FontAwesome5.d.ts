import { FA5Style } from './createIconSetFromFontAwesome5';
import glyphMap from './vendor/react-native-vector-icons/glyphmaps/FontAwesome5Free.json';
import { MultiStyleIcon } from './createMultiStyleIconSet';
declare const iconSet: MultiStyleIcon<keyof typeof glyphMap>;
export { FA5Style };
export default iconSet;
