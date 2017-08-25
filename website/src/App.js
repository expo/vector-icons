import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';

const IconFamilies = {
  Entypo: require('react-native-vector-icons/glyphmaps/Entypo.json'),
  EvilIcons: require('react-native-vector-icons/glyphmaps/EvilIcons.json'),
  FontAwesome: require('react-native-vector-icons/glyphmaps/FontAwesome.json'),
  Foundation: require('react-native-vector-icons/glyphmaps/Foundation.json'),
  Ionicons: require('react-native-vector-icons/glyphmaps/Ionicons.json'),
  MaterialIcons: require('react-native-vector-icons/glyphmaps/MaterialIcons.json'),
  MaterialCommunityIcons: require('react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json'),
  SimpleLineIcons: require('react-native-vector-icons/glyphmaps/SimpleLineIcons.json'),
  Octicons: require('react-native-vector-icons/glyphmaps/Octicons.json'),
  Zocial: require('react-native-vector-icons/glyphmaps/Zocial.json'),
};

class Icon extends Component {
  render() {
    return (
      <span style={{ fontFamily: this.props.family }} {...this.props}>
        {String.fromCharCode(IconFamilies[this.props.family][this.props.name])}
      </span>
    );
  }
}

const HeaderBar = props => {
  return (
    <div className="Header-Container">
      <div className="Header-Content">
        <h1 className="Header-Title">@expo/vector-icons directory</h1>
      </div>
    </div>
  );
};

class SearchBar extends Component {
  render() {
    return (
      <div className="Search-Container">
        <div className="Search-Content">
          <form onSubmit={this._onSubmit.bind(this)}>
            <Icon family="FontAwesome" name="search" className="Search-Icon" />
            <input
              ref={input => (this._input = input)}
              placeholder="Search for an icon"
              type="text"
              className="Search-Input"
            />
          </form>
        </div>
      </div>
    );
  }

  _onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this._input.value);
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matches: [],
    };
  }

  componentDidMount() {
    this._onSubmit('');
  }

  render() {
    return (
      <div className="App">
        <HeaderBar />
        <SearchBar onSubmit={this._onSubmit.bind(this)} />
        <div className="Container">
          {this.state.matches.map(this._renderMatch.bind(this))}
        </div>
      </div>
    );
  }
  // {Object.keys(IconFamilies).map(familyName => this._renderFamily(familyName))}

  _renderFamily(familyName) {
    return (
      <div>
        {Object.keys(IconFamilies[familyName]).map(iconName =>
          <Icon
            key={iconName + familyName}
            family={familyName}
            name={iconName}
          />
        )}
      </div>
    );
  }

  _onSubmit(text) {
    const lcText = text.toLowerCase();
    let matches = [];
    _.forEach(IconFamilies, (icons, family) => {
      let names = Object.keys(icons);
      let results = names.filter(
        name => name.toLowerCase().indexOf(lcText) >= 0
      );
      if (results.length) {
        matches = [...matches, { family, names: results }];
      }
    });

    this.setState({ matches });
  }

  _renderMatch(match) {
    let { family, names } = match;
    return (
      <div className="Result-Row" key={family}>
        <h2 className="Result-Title">
          {family}
        </h2>

        <div className="Result-List">
          {names.map(name => this._renderIcon(family, name))}
        </div>
      </div>
    );
  }

  _renderIcon(family, name) {
    return (
      <div className="Result-Icon-Container" key={name}>
        <Icon family={family} name={name} className="Result-Icon" />
        <h4 className="Result-Icon-Name">
          {name}
        </h4>
      </div>
    );
  }
}

export default App;
