"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createIconSet_1 = __importDefault(require("./createIconSet"));
const SimpleLineIcons_ttf_1 = __importDefault(require("./vendor/react-native-vector-icons/Fonts/SimpleLineIcons.ttf"));
const SimpleLineIcons_json_1 = __importDefault(require("./vendor/react-native-vector-icons/glyphmaps/SimpleLineIcons.json"));
exports.default = (0, createIconSet_1.default)(SimpleLineIcons_json_1.default, 'simple-line-icons', SimpleLineIcons_ttf_1.default);
//# sourceMappingURL=SimpleLineIcons.js.map