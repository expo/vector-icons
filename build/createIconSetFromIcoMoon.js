import createIconSet from './createIconSet';
/**
 * @deprecated in favor of `@react-native-vector-icons/icomoon`
 */
export default function (config, expoFontName, expoAssetId) {
    const glyphMap = {};
    config.icons.forEach((icon) => {
        icon.properties.name.split(/\s*,\s*/g).forEach((name) => {
            glyphMap[name] = icon.properties.code;
        });
    });
    const fontFamily = expoFontName || config.preferences.fontPref.metadata.fontFamily;
    return createIconSet(glyphMap, fontFamily, expoAssetId || `${fontFamily}.ttf`);
}
//# sourceMappingURL=createIconSetFromIcoMoon.js.map