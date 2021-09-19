"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createIconSet_1 = __importDefault(require("./createIconSet"));
const Octicons_ttf_1 = __importDefault(require("./vendor/react-native-vector-icons/Fonts/Octicons.ttf"));
const Octicons_json_1 = __importDefault(require("./vendor/react-native-vector-icons/glyphmaps/Octicons.json"));
exports.default = (0, createIconSet_1.default)(Octicons_json_1.default, 'octicons', Octicons_ttf_1.default);
//# sourceMappingURL=Octicons.js.map