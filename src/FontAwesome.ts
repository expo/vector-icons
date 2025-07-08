'use client';

import createIconSet from './createIconSet';
import font from './vendor/react-native-vector-icons/Fonts/FontAwesome.ttf';
import glyphMap from './vendor/react-native-vector-icons/glyphmaps/FontAwesome.json';

/**
 * @deprecated use `@react-native-vector-icons/fontawesome` instead.
 */
export default createIconSet(glyphMap, 'FontAwesome', font);
