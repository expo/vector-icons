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
const react_1 = __importStar(require("react"));
const createIconSet_1 = __importDefault(require("./createIconSet"));
function createMultiStyleIconSet(styles, optionsInput = {}) {
    const styleNames = Object.keys(styles);
    if (styleNames.length === 0) {
        throw new Error('You need to add at least one style');
    }
    const options = {
        defaultStyle: styleNames[0],
        fallbackFamily: (_unused) => styleNames[0],
        glyphValidator: (_unused, __unused) => true,
        ...optionsInput,
    };
    const iconSets = styleNames.reduce((acc, name) => {
        const style = styles[name];
        acc[name] = (0, createIconSet_1.default)(style.glyphMap || {}, style.fontFamily || '', style.fontFile || '', style.fontStyle || {});
        return acc;
    }, {});
    function styleFromProps(props) {
        return Object.keys(props).reduce((result, propName) => styleNames.indexOf(propName) !== -1 && props[propName] === true
            ? propName
            : result, options.defaultStyle);
    }
    function getIconSetForProps(props) {
        const { name } = props;
        const style = styleFromProps(props);
        if (options.glyphValidator(name, style))
            return iconSets[style];
        const family = options.fallbackFamily(name);
        if (styleNames.indexOf(family) === -1) {
            return options.defaultStyle;
        }
        return iconSets[family];
    }
    function selectIconClass(iconSet, iconClass) {
        return iconClass.length > 0 ? iconSet[iconClass] : iconSet;
    }
    function reduceProps(props) {
        return Object.keys(props).reduce((acc, prop) => {
            if (styleNames.indexOf(prop) === -1) {
                acc[prop] = props[prop];
            }
            return acc;
        }, {});
    }
    function getStyledIconSet(style, name = '') {
        if (styleNames.indexOf(style) === -1) {
            return iconSets[options.defaultStyle];
        }
        return !name
            ? iconSets[styleFromProps({ [style]: true })]
            : getIconSetForProps({ name, [style]: true });
    }
    function getFontFamily(style = options.defaultStyle) {
        return getStyledIconSet(style).getFontFamily();
    }
    function getRawGlyphMap(style = options.defaultStyle) {
        return getStyledIconSet(style).getRawGlyphMap();
    }
    function hasIcon(name, style = options.defaultStyle) {
        return options.glyphValidator(name, style);
    }
    function createStyledIconClass(selectClass = '') {
        class IconClass extends react_1.PureComponent {
            static defaultProps = styleNames.reduce((acc, name) => {
                acc[name] = false;
                return acc;
            }, {});
            static font = Object.values(styles).reduce((acc, style) => {
                acc[style.fontFamily] = style.fontFile;
                return acc;
            }, {});
            static Button;
            static StyledIconSet = getStyledIconSet;
            static getFontFamily = getFontFamily;
            static getRawGlyphMap = getRawGlyphMap;
            static hasIcon = hasIcon;
            render() {
                const selectedIconSet = getIconSetForProps(this.props);
                const SelectedIconClass = selectIconClass(selectedIconSet, selectClass);
                const props = reduceProps(this.props);
                return react_1.default.createElement(SelectedIconClass, props);
            }
        }
        return IconClass;
    }
    const Icon = createStyledIconClass();
    Icon.Button = createStyledIconClass('Button');
    return Icon;
}
exports.default = createMultiStyleIconSet;
//# sourceMappingURL=createMultiStyleIconSet.js.map