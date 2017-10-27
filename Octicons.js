import glyphMap from './vendor/react-native-vector-icons/glyphmaps/Octicons.json';
import createIconSet from './createIconSet';

export default createIconSet(glyphMap, 'octicons', require('./fonts/Octicons.ttf'));
