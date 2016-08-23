import React from 'react';
import { Text } from 'react-native';
import { Font } from 'exponent';
import createIconSet from 'react-native-vector-icons/lib/create-icon-set';
import createIconButtonComponent from 'react-native-vector-icons/lib/icon-button';

export default function(glyphMap, fontName, exponentAssetId) {
  const exponentFontName = Font.style(fontName, {ignoreWarning: true}).fontFamily;
  const font = {[fontName]: exponentAssetId};
  const RNVIconComponent = createIconSet(glyphMap, exponentFontName);

  class Icon extends React.Component {
    static propTypes = RNVIconComponent.propTypes;
    static defaultProps = RNVIconComponent.defaultProps;

    state = {
      fontIsLoaded: Font.isLoaded(fontName),
    }

    async componentWillMount() {
      if (!this.state.fontIsLoaded) {
        await Font.loadAsync(font);
        this.setState({fontIsLoaded: true});
      }
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
          ref={view => { this._icon = view; }}
          {...this.props}
        />
      );
    }
  }

  Icon.Button = createIconButtonComponent(Icon);
  Icon.glyphMap = glyphMap;
  Icon.font = font;

  return Icon;
}
