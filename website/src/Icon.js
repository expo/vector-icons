import React, { Component } from 'react';
import { IconFamilies } from './IconConstants';

export default class Icon extends Component {
  render() {
    const { family, style, className, name } = this.props;
    const fontFamily = family + (typeof style === 'undefined' ? '' : style);

    return (
      <span style={{ fontFamily }} className={className}>
        {String.fromCharCode(IconFamilies[family][name])}
      </span>
    );
  }
}
