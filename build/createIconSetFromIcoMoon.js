"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createIconSet_1 = __importDefault(require("./createIconSet"));
function default_1(config, expoFontName, expoAssetId) {
    const glyphMap = {};
    config.icons.forEach(icon => {
        icon.properties.name.split(/\s*,\s*/g).forEach(name => {
            glyphMap[name] = icon.properties.code;
        });
    });
    const fontFamily = expoFontName || config.preferences.fontPref.metadata.fontFamily;
    return (0, createIconSet_1.default)(glyphMap, fontFamily, expoAssetId || `${fontFamily}.ttf`);
}
exports.default = default_1;
//# sourceMappingURL=createIconSetFromIcoMoon.js.map