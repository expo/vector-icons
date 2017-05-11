import glyphMap
  from './vendor/react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json';
import createIconSet from './createIconSet';

export default createIconSet(
  glyphMap,
  'material-community',
  require('./fonts/MaterialCommunityIcons.ttf')
);
