import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import {StoriesData} from '../model/StoriesData';
import {getRandomTime} from '../util/RandomTime';
import Faker from 'faker';

class StoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#ffffff'}}>
        <StatusBar hidden></StatusBar>
        <FlatList
          data={StoriesData}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => {
            // console.log(item.photos[0]);
            return (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('ViewStories', {
                    photos: item.photos,
                  });
                }}>
                <View
                  style={{
                    marginVertical: 5,
                    flexDirection: 'row',
                    // backgroundColor: index % 2 == 0 ? 'white' : '#e7e7e740',
                    backgroundColor: 'white',
                  }}>
                  <View
                    style={{
                      height: 80,
                      width: 80,
                      // overflow: 'hidden',
                      borderRadius: 50,
                      borderStyle: 'solid',
                      borderWidth: 3,
                      borderColor: '#ccc',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={{uri: item.photos[0].image}}
                      style={{
                        borderRadius: 50,
                        height: '92%',
                        width: '92%',
                        resizeMode: 'cover',
                      }}></Image>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      paddingTop: 10,
                      paddingHorizontal: 20,
                    }}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                      {item.name}
                    </Text>
                    <Text style={{fontSize: 16, color: 'grey'}}>
                      {getRandomTime()}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}></FlatList>
      </View>
    );
  }
}

export default StoriesList;
