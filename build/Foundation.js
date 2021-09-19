"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createIconSet_1 = __importDefault(require("./createIconSet"));
const Foundation_ttf_1 = __importDefault(require("./vendor/react-native-vector-icons/Fonts/Foundation.ttf"));
const Foundation_json_1 = __importDefault(require("./vendor/react-native-vector-icons/glyphmaps/Foundation.json"));
exports.default = (0, createIconSet_1.default)(Foundation_json_1.default, 'foundation', Foundation_ttf_1.default);
//# sourceMappingURL=Foundation.js.map