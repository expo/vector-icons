import * as Font from 'expo-font';
import React from 'react';
import { Text, PixelRatio, } from 'react-native';
import createIconSet from './vendor/react-native-vector-icons/lib/create-icon-set';
import createIconButtonComponent from './vendor/react-native-vector-icons/lib/icon-button';
export { DEFAULT_ICON_COLOR, DEFAULT_ICON_SIZE, } from './vendor/react-native-vector-icons/lib/create-icon-set';
export default function (glyphMap, fontName, expoAssetId, fontStyle) {
    const font = { [fontName]: expoAssetId };
    const RNVIconComponent = createIconSet(glyphMap, fontName, null, fontStyle);
    let didWarn = false;
    return class Icon extends React.Component {
        static defaultProps = RNVIconComponent.defaultProps;
        static Button = createIconButtonComponent(Icon);
        static glyphMap = glyphMap;
        static getRawGlyphMap = () => glyphMap;
        static getFontFamily = () => fontName;
        static loadFont = () => Font.loadAsync(font);
        static font = font;
        static getImageSource = async (name, size, color) => {
            if (__DEV__ && !(name in glyphMap)) {
                console.warn(`"${name}" is not a valid icon name for family "${fontName}"`);
                return null;
            }
            if (typeof Font.renderToImageAsync !== 'function') {
                console.warn(`Font.renderToImageAsync is not available. Please update expo-font.`);
                return null;
            }
            await Font.loadAsync(font);
            const renderToImageResult = await Font.renderToImageAsync(String.fromCodePoint(glyphMap[name]), {
                fontFamily: fontName,
                color: color,
                size,
            });
            if (typeof renderToImageResult === 'string') {
                if (__DEV__ && !didWarn) {
                    didWarn = true;
                    console.warn('@expo/vector-icons: Font.renderToImageAsync() did not return image dimensions, because an outdated version of expo-font was used. The reported width and height are estimates, instead of real image dimension. Update expo-font to resolve this.');
                }
                const dimensions = size;
                return {
                    uri: renderToImageResult,
                    width: dimensions,
                    height: dimensions,
                    scale: PixelRatio.get(),
                };
            }
            else {
                const result = renderToImageResult;
                // @ts-expect-error: depending on expo-font version, `result` may or may not already include scale
                return { scale: PixelRatio.get(), ...result };
            }
        };
        _mounted = false;
        _icon;
        state = {
            fontIsLoaded: Font.isLoaded(fontName),
        };
        async componentDidMount() {
            this._mounted = true;
            if (!this.state.fontIsLoaded) {
                await Font.loadAsync(font);
                /* eslint-disable react/no-did-mount-set-state */
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
                return <Text />;
            }
            return (<RNVIconComponent ref={(view) => {
                    this._icon = view;
                }} {...this.props}/>);
        }
    };
}
//# sourceMappingURL=createIconSet.js.map