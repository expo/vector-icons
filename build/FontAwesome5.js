"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FA5Style = void 0;
const createIconSetFromFontAwesome5_1 = require("./createIconSetFromFontAwesome5");
const FontAwesome5Free_json_1 = __importDefault(require("./vendor/react-native-vector-icons/glyphmaps/FontAwesome5Free.json"));
const FontAwesome5Free_meta_json_1 = __importDefault(require("./vendor/react-native-vector-icons/glyphmaps/FontAwesome5Free_meta.json"));
const fontMap = {
    Regular: require('./vendor/react-native-vector-icons/Fonts/FontAwesome5_Regular.ttf'),
    Light: require('./vendor/react-native-vector-icons/Fonts/FontAwesome5_Regular.ttf'),
    Solid: require('./vendor/react-native-vector-icons/Fonts/FontAwesome5_Solid.ttf'),
    Brand: require('./vendor/react-native-vector-icons/Fonts/FontAwesome5_Brands.ttf'),
};
exports.FA5Style = {
    regular: 'regular',
    light: 'light',
    solid: 'solid',
    brand: 'brand',
};
const iconSet = (0, createIconSetFromFontAwesome5_1.createFA5iconSet)(FontAwesome5Free_json_1.default, FontAwesome5Free_meta_json_1.default, fontMap, false);
exports.default = iconSet;
//# sourceMappingURL=FontAwesome5.js.map