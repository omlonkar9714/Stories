import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';

class ViewStories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <StatusBar hidden={true}></StatusBar>
        <Text> ViewStories </Text>
      </View>
    );
  }
}

export default ViewStories;
