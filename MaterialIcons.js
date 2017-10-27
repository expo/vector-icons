import glyphMap from './vendor/react-native-vector-icons/glyphmaps/MaterialIcons.json';
import createIconSet from './createIconSet';

export default createIconSet(glyphMap, 'material', require('./fonts/MaterialIcons.ttf'));
