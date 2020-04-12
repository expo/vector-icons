import React, { Component } from 'react';
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Foundation,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  SimpleLineIcons,
  Octicons,
  Zocial,
} from '@expo/vector-icons';

export default class Icon extends Component {
  render() {
    this.name = this.props.name;
    this.size = this.props.size;
    this.color = this.props.color;

    switch (this.props.family) {
      case 'AntDesign':
        this.Icon = AntDesign;
        break;

      case 'Entypo':
        this.Icon = Entypo;
        break;

      case 'EvilIcons':
        this.Icon = EvilIcons;
        break;

      case 'Feather':
        this.Icon = Feather;
        break;

      case 'FontAwesome':
        this.Icon = FontAwesome;
        break;

      case 'FontAwesome5':
        this.Icon = FontAwesome5;
        break;

      case 'Foundation':
        this.Icon = Foundation;
        break;

      case 'Ionicons':
        this.Icon = Ionicons;
        break;

      case 'MaterialIcons':
        this.Icon = MaterialIcons;
        break;

      case 'MaterialCommunityIcons':
        this.Icon = MaterialCommunityIcons;
        break;

      case 'SimpleLineIcons':
        this.Icon = SimpleLineIcons;
        break;

      case 'Octicons':
        this.Icon = Octicons;
        break;

      case 'Zocial':
        this.Icon = Zocial;
        break;

      default:
        this.Icon = Ionicons;
    }

    return (
      <this.Icon
        name={this.name}
        size={this.size}
        color={this.color || '#000'}
      />
    );
  }
}
