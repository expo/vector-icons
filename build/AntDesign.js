"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createIconSet_1 = __importDefault(require("./createIconSet"));
const AntDesign_ttf_1 = __importDefault(require("./vendor/react-native-vector-icons/Fonts/AntDesign.ttf"));
const AntDesign_json_1 = __importDefault(require("./vendor/react-native-vector-icons/glyphmaps/AntDesign.json"));
exports.default = (0, createIconSet_1.default)(AntDesign_json_1.default, 'anticon', AntDesign_ttf_1.default);
//# sourceMappingURL=AntDesign.js.map