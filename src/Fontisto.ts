/**
 * Feather icon set component.
 * Usage: <Feather name="icon-name" size={20} color="#4F8EF7" />
 */
"use client";

import createIconSet from './createIconSet';
import font from './vendor/react-native-vector-icons/Fonts/Fontisto.ttf';
import glyphMap from './vendor/react-native-vector-icons/glyphmaps/Fontisto.json';

const iconSet = createIconSet(glyphMap, 'Fontisto', font);

export default iconSet;
