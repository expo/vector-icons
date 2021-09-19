"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_ICON_SIZE = exports.DEFAULT_ICON_COLOR = void 0;
const Font = __importStar(require("expo-font"));
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const create_icon_set_1 = __importDefault(require("./vendor/react-native-vector-icons/lib/create-icon-set"));
const icon_button_1 = __importDefault(require("./vendor/react-native-vector-icons/lib/icon-button"));
var create_icon_set_2 = require("./vendor/react-native-vector-icons/lib/create-icon-set");
Object.defineProperty(exports, "DEFAULT_ICON_COLOR", { enumerable: true, get: function () { return create_icon_set_2.DEFAULT_ICON_COLOR; } });
Object.defineProperty(exports, "DEFAULT_ICON_SIZE", { enumerable: true, get: function () { return create_icon_set_2.DEFAULT_ICON_SIZE; } });
function default_1(glyphMap, fontName, expoAssetId, fontStyle) {
    const font = { [fontName]: expoAssetId };
    const RNVIconComponent = (0, create_icon_set_1.default)(glyphMap, fontName, null, fontStyle);
    return class Icon extends react_1.default.Component {
        static defaultProps = RNVIconComponent.defaultProps;
        static Button = (0, icon_button_1.default)(Icon);
        static glyphMap = glyphMap;
        static getRawGlyphMap = () => glyphMap;
        static getFontFamily = () => fontName;
        static loadFont = () => Font.loadAsync(font);
        static font = font;
        _mounted = false;
        _icon;
        state = {
            fontIsLoaded: Font.isLoaded(fontName),
        };
        async componentDidMount() {
            this._mounted = true;
            if (!this.state.fontIsLoaded) {
                await Font.loadAsync(font);
                this._mounted && this.setState({ fontIsLoaded: true });
            }
        }
        componentWillUnmount() {
            this._mounted = false;
        }
        setNativeProps(props) {
            if (this._icon) {
                this._icon.setNativeProps(props);
            }
        }
        render() {
            if (__DEV__ && this.props.name && !(this.props.name in glyphMap)) {
                console.warn(`"${this.props.name}" is not a valid icon name for family "${fontName}"`);
            }
            if (!this.state.fontIsLoaded) {
                return react_1.default.createElement(react_native_1.Text, null);
            }
            return (react_1.default.createElement(RNVIconComponent, { ref: (view) => {
                    this._icon = view;
                }, ...this.props }));
        }
    };
}
exports.default = default_1;
//# sourceMappingURL=createIconSet.js.map