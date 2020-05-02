import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';

const { DEVICE_WIDTH, DEVICE_HEIGHT } = Dimensions.get('window');

const DEFAULT_DURATION = 250;

export default class Display extends Component {
  constructor(props) {
    super(props);

    this.state = { enable: this.props.enable };
  }

  onEndAnimation(endState) {
    if (endState.finished == true) this.setState({ enable: false });
  }

  shouldComponentUpdate(nextProps) {
    return true;
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    if (nextProps.enable != this.props.enable) {
      if (nextProps.enable == false) {
        let duration =
          nextProps.exitDuration ||
          nextProps.defaultDuration ||
          DEFAULT_DURATION;

        if (nextProps.exit != null) {
          this.refs.display[nextProps.exit](duration).then((endState) =>
            this.onEndAnimation(endState)
          );
        } else nextState.enable = false;
      } else nextState.enable = true;
    }
  }

  enableStyle() {
    if (this.state.enable) return {};

    return {
      position: 'absolute',
      top: DEVICE_HEIGHT,
      left: DEVICE_WIDTH,
      height: 0,
      width: 0,
    };
  }

  render() {
    if (this.state.enable == false && this.props.keepAlive != true) return null;

    return (
      <Animatable.View
        ref="display"
        style={[this.props.style, this.enableStyle.bind(this)()]}>
        {this.props.children}
      </Animatable.View>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.enable != this.props.enable)
      if (this.props.enable == true) {
        this.refs.display.stopAnimation();

        let duration =
          this.props.enterDuration ||
          this.props.defaultDuration ||
          DEFAULT_DURATION;

        if (this.props.enter != null) {
          this.refs.display[this.props.enter](duration).then((endState) => {});
        }
      }
  }
}
