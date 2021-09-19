"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createIconSet_1 = __importDefault(require("./createIconSet"));
const FontAwesome_ttf_1 = __importDefault(require("./vendor/react-native-vector-icons/Fonts/FontAwesome.ttf"));
const FontAwesome_json_1 = __importDefault(require("./vendor/react-native-vector-icons/glyphmaps/FontAwesome.json"));
exports.default = (0, createIconSet_1.default)(FontAwesome_json_1.default, 'FontAwesome', FontAwesome_ttf_1.default);
//# sourceMappingURL=FontAwesome.js.map