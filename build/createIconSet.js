import * as Font from "expo-font";
import React from "react";
import { Text, } from "react-native";
// @ts-expect-error: AssetRegistry is not typed
import { getAssetByID } from "react-native/Libraries/Image/AssetRegistry";
import createIconSet from "./vendor/react-native-vector-icons/lib/create-icon-set";
import createIconButtonComponent from "./vendor/react-native-vector-icons/lib/icon-button";
export { DEFAULT_ICON_COLOR, DEFAULT_ICON_SIZE, } from "./vendor/react-native-vector-icons/lib/create-icon-set";
export default function (glyphMap, fontName, expoAssetId, fontStyle) {
    const font = { [fontName]: expoAssetId };
    const RNVIconComponent = createIconSet(glyphMap, fontName, null, fontStyle);
    return class Icon extends React.Component {
        static defaultProps = RNVIconComponent.defaultProps;
        static Button = createIconButtonComponent(Icon);
        static glyphMap = glyphMap;
        static getRawGlyphMap = () => glyphMap;
        static getFontFamily = () => fontName;
        static loadFont = () => Font.loadAsync(font);
        static font = font;
        _mounted = false;
        _icon;
        state = {
            // If `getAssetByID` returns `null`, the call path is probably from react-native-vector-icons
            // that the `expoAssetId` parameter is a string font name. e.g. `MaterialIcons.ttf`.
            // We just pass the font to react-native-vector-icons without checking if it's loaded.
            fontIsLoaded: Font.isLoaded(fontName) || !getAssetByID(expoAssetId),
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
                return React.createElement(Text, null);
            }
            return (React.createElement(RNVIconComponent, { ref: (view) => {
                    this._icon = view;
                }, ...this.props }));
        }
    };
}
//# sourceMappingURL=createIconSet.js.map