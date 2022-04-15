"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createIconSet_1 = __importDefault(require("./createIconSet"));
const Feather_ttf_1 = __importDefault(require("./vendor/react-native-vector-icons/Fonts/Feather.ttf"));
const Feather_json_1 = __importDefault(require("./vendor/react-native-vector-icons/glyphmaps/Feather.json"));
exports.default = (0, createIconSet_1.default)(Feather_json_1.default, 'feather', Feather_ttf_1.default);
//# sourceMappingURL=Feather.js.map