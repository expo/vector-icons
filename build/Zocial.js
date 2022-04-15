"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createIconSet_1 = __importDefault(require("./createIconSet"));
const Zocial_ttf_1 = __importDefault(require("./vendor/react-native-vector-icons/Fonts/Zocial.ttf"));
const Zocial_json_1 = __importDefault(require("./vendor/react-native-vector-icons/glyphmaps/Zocial.json"));
exports.default = (0, createIconSet_1.default)(Zocial_json_1.default, 'zocial', Zocial_ttf_1.default);
//# sourceMappingURL=Zocial.js.map