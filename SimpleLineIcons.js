import glyphMap
  from './vendor/react-native-vector-icons/glyphmaps/SimpleLineIcons.json';
import createIconSet from './createIconSet';

export default createIconSet(
  glyphMap,
  'simple-line-icons',
  require('./fonts/SimpleLineIcons.ttf')
);
