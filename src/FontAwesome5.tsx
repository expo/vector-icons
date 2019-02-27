import React from 'react';

export default class FontAwesome5 extends React.Component {
  componentDidMount() {
    console.warn(
      'FontAwesome5 is not supported by @expo/vector-icons: https://github.com/expo/vector-icons/issues/77'
    );
  }

  render() {
    return null;
  }
}
