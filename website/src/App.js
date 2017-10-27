import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';

import { IconsArray } from './IconConstants';
import Icon from './Icon';
import IconList from './IconList';

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
              autoFocus
              onChange={this._onChange}
              placeholder="Search for an icon"
              type="text"
              className="Search-Input"
            />
          </form>
        </div>
      </div>
    );
  }

  _onChange = e => {
    this.props.onSubmit(e.target.value);
  };

  _onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this._input.value);
  };
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };
  }

  render() {
    const { searchText } = this.state;
    const data = IconsArray.filter(icon => {
      return icon.name.includes(searchText) || icon.family.toLowerCase().includes(searchText);
    });

    return (
      <div className="App">
        <HeaderBar />
        <SearchBar onSubmit={this._onSubmit.bind(this)} />
        <div className="Container">
          <IconList data={data} />
        </div>
      </div>
    );
  }

  _onSubmit(text) {
    this.setState({ searchText: text.toLowerCase() });
  }
}

export default App;
