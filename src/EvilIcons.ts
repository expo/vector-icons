'use client';

import createIconSet from './createIconSet';
import font from './vendor/react-native-vector-icons/Fonts/EvilIcons.ttf';
import glyphMap from './vendor/react-native-vector-icons/glyphmaps/EvilIcons.json';

/**
 * @deprecated use `@react-native-vector-icons/evil-icons` instead.
 */
export default createIconSet(glyphMap, 'evilicons', font);
