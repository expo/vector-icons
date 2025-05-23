import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { pick, omit } from './object-utils';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 8,
  },
  touchable: {
    overflow: 'hidden',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontWeight: '600',
    backgroundColor: 'transparent',
  },
});

const IOS7_BLUE = '#007AFF';

const TEXT_PROP_NAMES = [
  'ellipsizeMode',
  'numberOfLines',
  'textBreakStrategy',
  'selectable',
  'suppressHighlighting',
  'allowFontScaling',
  'adjustsFontSizeToFit',
  'minimumFontScale',
];

const TOUCHABLE_PROP_NAMES = [
  'accessible',
  'accessibilityLabel',
  'accessibilityHint',
  'accessibilityComponentType',
  'accessibilityRole',
  'accessibilityStates',
  'accessibilityTraits',
  'onFocus',
  'onBlur',
  'disabled',
  'onPress',
  'onPressIn',
  'onPressOut',
  'onLayout',
  'onLongPress',
  'nativeID',
  'testID',
  'delayPressIn',
  'delayPressOut',
  'delayLongPress',
  'activeOpacity',
  'underlayColor',
  'selectionColor',
  'onShowUnderlay',
  'onHideUnderlay',
  'hasTVPreferredFocus',
  'tvParallaxProperties',
];

export default function createIconButtonComponent(Icon) {
  return class IconButton extends PureComponent {
    // NOTE(@expo/vector-icons): Modified to remove propTypes

    static defaultProps = {
      backgroundColor: IOS7_BLUE,
      borderRadius: 5,
      color: 'white',
      size: 20,
    };

    render() {
      const { style, iconStyle, children, ...restProps } = this.props;

      const iconProps = pick(
        restProps,
        TEXT_PROP_NAMES,
        'style',
        'name',
        'size',
        'color'
      );
      const touchableProps = pick(restProps, TOUCHABLE_PROP_NAMES);
      const props = omit(
        restProps,
        Object.keys(iconProps),
        Object.keys(touchableProps),
        'iconStyle',
        'borderRadius',
        'backgroundColor'
      );
      iconProps.style = iconStyle ? [styles.icon, iconStyle] : styles.icon;

      const colorStyle = pick(this.props, 'color');
      const blockStyle = pick(this.props, 'backgroundColor', 'borderRadius');

      return (
        <TouchableHighlight
          style={[styles.touchable, blockStyle]}
          {...touchableProps}
        >
          <View style={[styles.container, blockStyle, style]} {...props}>
            <Icon {...iconProps} />
            {typeof children === 'string' ? (
              <Text style={[styles.text, colorStyle]} selectable={false}>
                {children}
              </Text>
            ) : (
              children
            )}
          </View>
        </TouchableHighlight>
      );
    }
  };
}
