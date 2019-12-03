import * as Font from "expo-font";
import React, { ComponentClass } from "react";
import { Text, TextProps } from "react-native";

import createIconSet from "./vendor/react-native-vector-icons/lib/create-icon-set";
import createIconButtonComponent from "./vendor/react-native-vector-icons/lib/icon-button";

export {
  DEFAULT_ICON_COLOR,
  DEFAULT_ICON_SIZE
} from "./vendor/react-native-vector-icons/lib/create-icon-set";

export interface IconProps<GLYPHS extends string> extends TextProps {
  /**
   * Size of the icon, can also be passed as fontSize in the style object.
   *
   * @default 12
   */
  size?: number;

  /**
   * Name of the icon to show
   *
   * See Icon Explorer app
   * {@link https://github.com/oblador/react-native-vector-icons/tree/master/Examples/IconExplorer}
   */
  name: GLYPHS;

  /**
   * Color of the icon
   *
   */
  color?: string;
}

export interface Icon<GM, FN extends string> {
  propTypes: any;
  defaultProps: any;
  Button: ComponentClass<any>;
  glyphMap: GM;
  getRawGlyphMap: () => GM;
  getFontFamily: () => FN;
  loadFont: () => Promise<void>;
  font: { [x: string]: any };
  new (props: icon<GM>): React.Component<icon<GM>>;
}

type icon<GM> = IconProps<Extract<keyof GM, string>>;

export default function<GM, FN extends string>(
  glyphMap: GM,
  fontName: FN,
  expoAssetId,
  fontStyle?: any
): Icon<GM, FN> {
  const font = { [fontName]: expoAssetId };
  const RNVIconComponent = createIconSet(glyphMap, fontName, null, fontStyle);

  return class Icon extends React.Component<icon<GM>> {
    static propTypes = RNVIconComponent.propTypes;
    static defaultProps = RNVIconComponent.defaultProps;
    static Button = createIconButtonComponent(Icon);
    static glyphMap = glyphMap;
    static getRawGlyphMap = () => glyphMap;
    static getFontFamily = () => fontName;
    static loadFont = () => Font.loadAsync(font);
    static font = font;

    _mounted = false;
    _icon?: any;

    state = {
      fontIsLoaded: Font.isLoaded(fontName)
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
      if (!this.state.fontIsLoaded) {
        return <Text />;
      }

      return (
        <RNVIconComponent
          ref={view => {
            this._icon = view;
          }}
          {...this.props}
        />
      );
    }
  };
}
