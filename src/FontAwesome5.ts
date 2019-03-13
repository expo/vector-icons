import { createFA5iconSet } from './vendor/react-native-vector-icons/lib/create-icon-set-from-fontawesome5';

import glyphMap from './glyphmaps/FontAwesome5Free.json';
import metadata from './glyphmaps/FontAwesome5Free_meta.json';

export { FA5Style } from './vendor/react-native-vector-icons/lib/create-icon-set-from-fontawesome5';

const iconSet = createFA5iconSet(glyphMap, metadata, false);

export default iconSet;
