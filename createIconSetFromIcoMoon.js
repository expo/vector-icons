import { Font } from 'exponent';
import createIconSetFromIcoMoon from 'react-native-vector-icons/lib/create-icon-set-from-icomoon';

export default function(config, exponentFontName, exponentAssetId) {
  return createIconSetFromIcoMoon(config, Font.style(exponentFontName).fontFamily, exponentAssetId);
}
