import React, {Component} from 'react';
import {View, Text, Animated} from 'react-native';

class AnimatedLineComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: this.props.start,
      width: 0,
      percentageFilled: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.state.percentageFilled.addListener(value => {
      //   console.log('Current width ', value);
      this.setState({width: value.value});
    });
    if (this.state.start) {
      this.startAnimation();
    }
  }

  stopAnimation = () => {
    Animated.timing(this.state.percentageFilled, {
      toValue: 100,
      duration: 5000,
      useNativeDriver: false,
    }).stop(() => {
      console.log('Stopped animation');
    });
  };

  startAnimation = () => {
    Animated.timing(this.state.percentageFilled, {
      toValue: 100,
      duration: 2000,
      useNativeDriver: false,
    }).start(() => {
      console.log('Ended animation');
      this.props.goToNextPhoto();
      //   this.resetAnimation();
    });
  };

  resetAnimation = () => {
    Animated.timing(this.state.percentageFilled, {
      toValue: 0,
      duration: 100,
      useNativeDriver: false,
    }).start(() => {
      //   console.log('Ended animation');
      this.props.goToPreviousPhoto();
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.start !== this.props.start) {
      this.props.start == true ? this.startAnimation() : this.resetAnimation();
    }
  }

  render() {
    return (
      <View
        style={{
          //   top: 150,
          position: 'absolute',
          height: 4,
          width: '100%',
          backgroundColor: 'grey',
        }}>
        <Animated.View
          style={{
            position: 'absolute',
            height: 4,
            width: this.state.width + '%',
            backgroundColor: 'white',
            justifyContent: 'center',
          }}></Animated.View>
      </View>
    );
  }
}

export default AnimatedLineComponent;
