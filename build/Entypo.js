"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createIconSet_1 = __importDefault(require("./createIconSet"));
const Entypo_ttf_1 = __importDefault(require("./vendor/react-native-vector-icons/Fonts/Entypo.ttf"));
const Entypo_json_1 = __importDefault(require("./vendor/react-native-vector-icons/glyphmaps/Entypo.json"));
exports.default = (0, createIconSet_1.default)(Entypo_json_1.default, 'entypo', Entypo_ttf_1.default);
//# sourceMappingURL=Entypo.js.map