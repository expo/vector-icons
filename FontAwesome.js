import glyphMap from './vendor/react-native-vector-icons/glyphmaps/FontAwesome.json';
import createIconSet from './createIconSet';

export default createIconSet(glyphMap, 'awesome', require('./fonts/FontAwesome.ttf'));
