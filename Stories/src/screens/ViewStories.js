import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import ViewImagesComponent from '../components/ViewImagesComponent';

class ViewStories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden={true}></StatusBar>
        {/* <Text>{this.props.route.params.photos}</Text> */}
        <ViewImagesComponent
          photos={this.props.route.params.photos}></ViewImagesComponent>
      </View>
    );
  }
}

export default ViewStories;
