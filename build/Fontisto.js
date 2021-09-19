"use strict";
/**
 * Feather icon set component.
 * Usage: <Feather name="icon-name" size={20} color="#4F8EF7" />
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createIconSet_1 = __importDefault(require("./createIconSet"));
const Fontisto_ttf_1 = __importDefault(require("./vendor/react-native-vector-icons/Fonts/Fontisto.ttf"));
const Fontisto_json_1 = __importDefault(require("./vendor/react-native-vector-icons/glyphmaps/Fontisto.json"));
const iconSet = (0, createIconSet_1.default)(Fontisto_json_1.default, "Fontisto", Fontisto_ttf_1.default);
exports.default = iconSet;
//# sourceMappingURL=Fontisto.js.map