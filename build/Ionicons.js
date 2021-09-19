"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createIconSet_1 = __importDefault(require("./createIconSet"));
const Ionicons_ttf_1 = __importDefault(require("./vendor/react-native-vector-icons/Fonts/Ionicons.ttf"));
const Ionicons_json_1 = __importDefault(require("./vendor/react-native-vector-icons/glyphmaps/Ionicons.json"));
exports.default = (0, createIconSet_1.default)(Ionicons_json_1.default, 'ionicons', Ionicons_ttf_1.default);
//# sourceMappingURL=Ionicons.js.map