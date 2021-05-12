import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';

import {StoriesData} from '../model/StoriesData';

class StoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#ffffff'}}>
        <StatusBar hidden={false}></StatusBar>
        <Text
          style={{fontSize: 30}}
          onPress={() => {
            this.props.navigation.navigate('ViewStories');
          }}>
          StoriesList
        </Text>
        <Text>{JSON.stringify(StoriesData)}</Text>
      </View>
    );
  }
}

export default StoriesList;
