"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createIconSet_1 = __importDefault(require("./createIconSet"));
const MaterialCommunityIcons_ttf_1 = __importDefault(require("./vendor/react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf"));
const MaterialCommunityIcons_json_1 = __importDefault(require("./vendor/react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json"));
exports.default = (0, createIconSet_1.default)(MaterialCommunityIcons_json_1.default, 'material-community', MaterialCommunityIcons_ttf_1.default);
//# sourceMappingURL=MaterialCommunityIcons.js.map