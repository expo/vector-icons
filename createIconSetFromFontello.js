import { Font } from 'exponent';
import createIconSetFromFontello from 'react-native-vector-icons/lib/create-icon-set-from-fontello';

export default function(config, exponentFontName, exponentAssetId) {
  return createIconSetFromFontello(config, Font.style(exponentFontName).fontFamily, exponentAssetId);
}
