"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFA5iconSet = exports.FA5Style = void 0;
const react_native_1 = require("react-native");
const createMultiStyleIconSet_1 = __importDefault(require("./createMultiStyleIconSet"));
exports.FA5Style = {
    regular: 'regular',
    light: 'light',
    solid: 'solid',
    brand: 'brand',
};
function createFA5iconSet(glyphMap, metadata = {}, fonts, pro = false) {
    const metadataKeys = Object.keys(metadata);
    const fontFamily = `FontAwesome5${pro ? 'Pro' : 'Free'}`;
    function fallbackFamily(glyph) {
        for (let i = 0; i < metadataKeys.length; i += 1) {
            const family = metadataKeys[i];
            if (metadata[family].indexOf(glyph) !== -1) {
                return family === 'brands' ? 'brand' : family;
            }
        }
        return 'regular';
    }
    function glyphValidator(glyph, style) {
        const family = style === 'brand' ? 'brands' : style;
        if (metadataKeys.indexOf(family) === -1)
            return false;
        return metadata[family].indexOf(glyph) !== -1;
    }
    function createFontAwesomeStyle(styleName, fontWeight, family = fontFamily) {
        let fontFile = fonts[styleName];
        return {
            fontFamily: `${family}-${styleName}`,
            fontFile,
            fontStyle: react_native_1.Platform.select({
                ios: {
                    fontWeight,
                },
                default: {},
            }),
            glyphMap,
        };
    }
    const brandIcons = createFontAwesomeStyle('Brand', '400');
    const lightIcons = createFontAwesomeStyle('Light', '100');
    const regularIcons = createFontAwesomeStyle('Regular', '400');
    const solidIcons = createFontAwesomeStyle('Solid', '700');
    const Icon = (0, createMultiStyleIconSet_1.default)({
        brand: brandIcons,
        light: lightIcons,
        regular: regularIcons,
        solid: solidIcons,
    }, {
        defaultStyle: 'regular',
        fallbackFamily,
        glyphValidator,
    });
    return Icon;
}
exports.createFA5iconSet = createFA5iconSet;
//# sourceMappingURL=createIconSetFromFontAwesome5.js.map