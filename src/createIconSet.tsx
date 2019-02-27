import React from 'react';
import { Text } from 'react-native';
import { loadAsync, isLoaded } from 'expo-font';
import createIconSet from './vendor/react-native-vector-icons/lib/create-icon-set';
import createIconButtonComponent from './vendor/react-native-vector-icons/lib/icon-button';

export default function(glyphMap, fontName, expoAssetId) {
  const font = { [fontName]: expoAssetId };
  const RNVIconComponent = createIconSet(glyphMap, fontName);

  return class Icon extends React.Component {
    static propTypes = RNVIconComponent.propTypes;
    static defaultProps = RNVIconComponent.defaultProps;
    static Button = createIconButtonComponent(Icon);
    static glyphMap = glyphMap;
    static getRawGlyphMap = () => glyphMap;
    static getFontFamily = () => fontName;
    static loadFont = () => loadAsync(font);
    static font = font;

    _mounted = false;
    _icon?: any;

    state = {
      fontIsLoaded: isLoaded(fontName),
    };

    async componentWillMount() {
      this._mounted = true;
      if (!this.state.fontIsLoaded) {
        await loadAsync(font);
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
