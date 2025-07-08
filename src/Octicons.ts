'use client';

import createIconSet from './createIconSet';
import font from './vendor/react-native-vector-icons/Fonts/Octicons.ttf';
import glyphMap from './vendor/react-native-vector-icons/glyphmaps/Octicons.json';

/**
 * @deprecated use `@react-native-vector-icons/octicons` instead.
 */
export default createIconSet(glyphMap, 'octicons', font);
