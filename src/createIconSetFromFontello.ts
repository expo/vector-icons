import createIconSetFromFontello from './vendor/react-native-vector-icons/lib/create-icon-set-from-fontello';

/**
 * @deprecated in favor of `@react-native-vector-icons/fontello`
 */
export default function (config, expoFontName, expoAssetId) {
  return createIconSetFromFontello(config, expoFontName, expoAssetId);
}
