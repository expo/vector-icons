import { FA6Style } from './createIconSetFromFontAwesome6';
import glyphMap from './vendor/react-native-vector-icons/glyphmaps/FontAwesome6Free.json';
import { MultiStyleIcon } from './createMultiStyleIconSet';
declare const iconSet: MultiStyleIcon<keyof typeof glyphMap>;
export { FA6Style };
export default iconSet;
