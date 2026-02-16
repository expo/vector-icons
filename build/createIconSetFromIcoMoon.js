import createIconSet from './createIconSet';
export default function (config, expoFontName, expoAssetId) {
    const glyphMap = {};
    if ('icons' in config) {
        // Old IcoMoon app
        config.icons.forEach((icon) => {
            icon.properties.name.split(/\s*,\s*/g).forEach((name) => {
                glyphMap[name] = icon.properties.code;
            });
        });
    }
    else if ('glyphs' in config) {
        // New IcoMoon app
        config.glyphs.forEach((glyph) => {
            glyph.extras.name.split(/\s*,\s*/g).forEach((name) => {
                glyphMap[name] = glyph.extras.codePoint;
            });
        });
    }
    else {
        throw new Error('Invalid IcoMoon config: expected "icons" (old format) or "glyphs" (new format)');
    }
    const fontFamily = expoFontName || (config.preferences?.fontPref?.metadata?.fontFamily ?? 'icomoon');
    return createIconSet(glyphMap, fontFamily, expoAssetId || `${fontFamily}.ttf`);
}
//# sourceMappingURL=createIconSetFromIcoMoon.js.map