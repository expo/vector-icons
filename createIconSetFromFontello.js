import { Font } from 'expo';
import createIconSetFromFontello
  from 'react-native-vector-icons/lib/create-icon-set-from-fontello';

export default function(config, expoFontName, expoAssetId) {
  return createIconSetFromFontello(
    config,
    Font.style(expoFontName).fontFamily,
    expoAssetId
  );
}
