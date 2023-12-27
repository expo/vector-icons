import React, { Component } from 'react';
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Foundation,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  SimpleLineIcons,
  Octicons,
  Zocial,
  Fontisto,
} from '@expo/vector-icons';

export default class Icon extends Component {
  render() {
    let Icon;

    switch (this.props.family) {
      case 'AntDesign':
        Icon = AntDesign;
        break;

      case 'Entypo':
        Icon = Entypo;
        break;

      case 'EvilIcons':
        Icon = EvilIcons;
        break;

      case 'Feather':
        Icon = Feather;
        break;

      case 'FontAwesome':
        Icon = FontAwesome;
        break;

      case 'FontAwesome5':
        Icon = FontAwesome5;
        break;

      case 'FontAwesome6':
        Icon = FontAwesome6;
        break;

      case 'Foundation':
        Icon = Foundation;
        break;

      case 'Ionicons':
        Icon = Ionicons;
        break;

      case 'MaterialIcons':
        Icon = MaterialIcons;
        break;

      case 'MaterialCommunityIcons':
        Icon = MaterialCommunityIcons;
        break;

      case 'SimpleLineIcons':
        Icon = SimpleLineIcons;
        break;

      case 'Octicons':
        Icon = Octicons;
        break;

      case 'Zocial':
        Icon = Zocial;
        break;

      case 'Fontisto':
        Icon = Fontisto;
        break;

      default:
        Icon = Ionicons;
    }

    return (
      <Icon
        name={this.props.name}
        size={this.props.size}
        color={this.props.color || '#000'}
      />
    );
  }
}
