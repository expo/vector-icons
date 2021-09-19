"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createIconSet_1 = __importDefault(require("./createIconSet"));
const EvilIcons_ttf_1 = __importDefault(require("./vendor/react-native-vector-icons/Fonts/EvilIcons.ttf"));
const EvilIcons_json_1 = __importDefault(require("./vendor/react-native-vector-icons/glyphmaps/EvilIcons.json"));
exports.default = (0, createIconSet_1.default)(EvilIcons_json_1.default, 'evilicons', EvilIcons_ttf_1.default);
//# sourceMappingURL=EvilIcons.js.map