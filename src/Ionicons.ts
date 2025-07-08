'use client';

import createIconSet from './createIconSet';
import font from './vendor/react-native-vector-icons/Fonts/Ionicons.ttf';
import glyphMap from './vendor/react-native-vector-icons/glyphmaps/Ionicons.json';

/**
 * @deprecated use `@react-native-vector-icons/ionicons` instead.
 */
export default createIconSet(glyphMap, 'ionicons', font);
