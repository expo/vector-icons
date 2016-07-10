import React from 'react';
import { View } from 'react-native';
import { Font } from 'exponent';
import createIconSet from 'react-native-vector-icons/lib/create-icon-set';

export default function(glyphMap, fontName, exponentAssetId) {
  const exponentFontName = Font.style(fontName, {ignoreWarning: true}).fontFamily;
  const fontId = {[fontName]: exponentAssetId};
  let OriginalIcon = createIconSet(glyphMap, exponentFontName, 'n/a');

  class Icon extends React.Component {
    static propTypes = OriginalIcon.propTypes;
    static defaultProps = OriginalIcon.defaultProps;

    state = {
      fontIsLoaded: Font.isLoaded(fontName),
    }

    async componentWillMount() {
      if (!this.state.fontIsLoaded) {
        await Font.loadAsync(fontId);
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
        return <View />;
      }

      return (
        <OriginalIcon
          ref={view => { this._icon = view; }}
          {...this.props}
        />
      );
    }
  }

  return Icon;
}
