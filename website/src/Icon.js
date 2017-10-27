import React, { Component } from 'react';
import { IconFamilies } from './IconConstants';

export default class Icon extends Component {
  render() {
    return (
      <span style={{ fontFamily: this.props.family }} className={this.props.className}>
        {String.fromCharCode(IconFamilies[this.props.family][this.props.name])}
      </span>
    );
  }
}
