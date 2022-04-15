"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createIconSet_1 = __importDefault(require("./createIconSet"));
const MaterialIcons_ttf_1 = __importDefault(require("./vendor/react-native-vector-icons/Fonts/MaterialIcons.ttf"));
const MaterialIcons_json_1 = __importDefault(require("./vendor/react-native-vector-icons/glyphmaps/MaterialIcons.json"));
exports.default = (0, createIconSet_1.default)(MaterialIcons_json_1.default, 'material', MaterialIcons_ttf_1.default);
//# sourceMappingURL=MaterialIcons.js.map