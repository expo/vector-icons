/**
 * Phosphor icon set component.
 * Usage: <Phosphor name="icon-name" size={20} color="#4F8EF7" />
 */

import { createPhosphorIconSet } from './lib/create-icon-set-from-phosphor';
import glyphMap from './glyphmaps/Phosphor.json';

export { PhosphorStyle } from './lib/create-icon-set-from-phosphor';

const iconSet = createPhosphorIconSet(glyphMap);

export default iconSet;
export const {
  Button,
  getImageSource,
  getImageSourceSync,
} = iconSet;
