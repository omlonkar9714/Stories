import React, {Component} from 'react';
import {View, Text} from 'react-native';

class BorderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          height: 5,
          flex: 1,
          margin: 4,
          backgroundColor: 'green',
        }}></View>
    );
  }
}

export default BorderComponent;
