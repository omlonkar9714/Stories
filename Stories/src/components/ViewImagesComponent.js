import React, {Component} from 'react';
import {createRef} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  Button,
  TouchableOpacity,
  StatusBar,
  Animated,
} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import Faker from 'faker';
import AnimatedLineComponent from './AnimatedLineComponent';

class ViewImagesComponent extends Component {
  constructor(props) {
    super(props);
    this.flatlist = createRef();
    this.viewabilityConfig = {
      minimumViewTime: 500,
      itemVisiblePercentThreshold: 10,
      waitForInteraction: true,
    };

    this.state = {
      photos: this.props.photos,
      currentImage: 0,
      animatedValues: this.props.photos.map(item => new Animated.Value(0)),
      percentageFilled: new Animated.Value(0),
      widths: this.props.photos.map(item => 0),
      startAnimations: this.props.photos.map(item => false),
      // startAnimations: [false, true, false.false],
      startTest: false,
    };
  }

  //Method to invoke when item change
  onViewableItemsChanged = ({viewableItems, changed}) => {
    this.setState({currentImage: viewableItems[0].index});
  };

  componentDidMount() {
    this.startFirstLineAnimation();

    // this.state.animatedValues.map((item, index) => {
    //   // console.log('listener added');
    //   item.addListener(value => {
    //     // console.log('For ', index + ' : ', value.value);
    //     let newWidths = this.state.widths;
    //     for (let i = 0; i < newWidths.length; i++) {
    //       if (i == index) {
    //         newWidths[i] = value.value;
    //       }
    //     }
    //     this.setState({widths: newWidths});
    //   });
    // });
    // this.state.animatedValues[0].addListener(value => {
    //   console.log('Current width ', value);
    //   this.setState({width: value.value});
    // });
    // this.startAnimation();
  }

  startFirstLineAnimation = () => {
    // console.log(this.state.startAnimations);
    let dataLines = this.state.startAnimations;
    dataLines[0] = true;
    // console.log(dataLines);
    this.setState({startAnimations: dataLines}, () => {
      console.log(this.state.startAnimations);
    });
  };

  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    // this.state.percentageFilled.removeListener();
    // this.state.animatedValues.map((item, index) => {
    //   // console.log('listener removed');
    //   item.removeListener();
    // });
  }

  startAnimation = () => {
    // console.log('Starting animation one by one');
    // const AnimationsArray = this.state.animatedValues.map(value =>
    //   Animated.timing(value, {
    //     toValue: 100,
    //     duration: 3000,
    //     useNativeDriver: false,
    //   }),
    // );
    // while (this.state.currentImage != this.state.photos.length - 1) {
    //   AnimationsArray[this.state.currentImage].start(() => {});
    // }
    // AnimationsArray[this.state.currentImage].start(() => {
    //   if (this.state.currentImage != this.state.photos.length) {
    //     console.log('Keep going');
    //   }
    // });
    // AnimationsArray[this.state.currentImage].start(() => {
    //   console.log('ended for ', this.state.currentImage);
    //   while (this.state.currentImage < this.state.photos.length - 1) {
    //     this.flatlist.scrollToIndex({
    //       animated: true,
    //       index: this.state.currentImage + 1,
    //     });
    //     //   this.setState({currentImage: this.state.currentImage + 1});
    //     AnimationsArray[this.state.currentImage].start();
    //   }
    // });
    // AnimationsArray[this.state.currentImage].start(() => {
    //   console.log('Ended ');
    // });
    // const oneteo = Animated.timing(this.state.percentageFilled, {
    //   toValue: 100,
    //   duration: 5000,
    //   useNativeDriver: false,
    // });
    // Animated.sequence(
    //   this.state.animatedValues.map(item =>
    //     Animated.timing(item, {
    //       toValue: 100,
    //       duration: 2000,
    //       useNativeDriver: false,
    //     }),
    //   ),
    // ).start(() => {
    //   // this.props.navigation.goBack(null);
    //   console.log('ended');
    // });
  };

  goToNextPhoto = () => {
    if (this.state.currentImage != this.state.photos.length - 1) {
      this.flatlist.scrollToIndex({
        animated: true,
        index: this.state.currentImage + 1,
      });

      let dataLines = this.state.startAnimations;
      dataLines[this.state.currentImage + 1] = true;
      // console.log(dataLines);
      this.setState({startAnimations: dataLines}, () => {
        console.log(this.state.startAnimations);
      });
      //   this.setState({currentImage: this.state.currentImage + 1});
    }
  };

  goToPreviousPhoto = () => {
    if (this.state.currentImage != 0) {
      this.flatlist.scrollToIndex({
        animated: true,
        index: this.state.currentImage - 1,
      });

      let dataLines = this.state.startAnimations;
      dataLines[this.state.currentImage] = false;
      // console.log(dataLines);
      this.setState({startAnimations: dataLines}, () => {
        console.log(this.state.startAnimations);
      });
      //   this.setState({currentImage: this.state.currentImage - 1});
    }
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <StatusBar hidden></StatusBar>
        <FlatList
          ref={ref => (this.flatlist = ref)}
          onViewableItemsChanged={this.onViewableItemsChanged}
          pagingEnabled={true}
          horizontal
          data={this.state.photos}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  height: Dimensions.get('screen').height,
                  width: Dimensions.get('screen').width,
                }}>
                <ImageZoom
                  cropWidth={Dimensions.get('window').width}
                  cropHeight={Dimensions.get('window').height}
                  imageWidth={Dimensions.get('window').width}
                  imageHeight={Dimensions.get('window').height}>
                  <Image
                    style={{
                      height: '100%',
                      width: '100%',
                      resizeMode: 'repeat',
                    }}
                    source={{uri: item.image}}></Image>
                </ImageZoom>
              </View>
            );
          }}></FlatList>

        <TouchableOpacity
          onPress={() => {
            // console.log(Object.keys(this.flatlist._listRef));
            if (this.state.currentImage != 0) {
              this.flatlist.scrollToIndex({
                animated: true,
                index: this.state.currentImage - 1,
              });

              // let NewData = this.state.startAnimations;
              // console.log(
              //   'on prev press ',
              //   NewData,
              //   this.state.currentImage,
              //   '==' + this.state.photos.length,
              // );
              // for (let i = 0; i < NewData.length; i++) {
              //   NewData[i] = false;
              // }
              // this.setState({startAnimations: NewData});

              //   this.setState({currentImage: this.state.currentImage - 1});
            }
          }}
          style={{
            position: 'absolute',
            height: Dimensions.get('screen').height,
            width: (Dimensions.get('window').width / 100) * 20,
            backgroundColor: 'transparent',
          }}></TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            // console.log(Object.keys(this.flatlist));
            if (this.state.currentImage != this.state.photos.length - 1) {
              this.flatlist.scrollToIndex({
                animated: true,
                index: this.state.currentImage + 1,
              });
              //   this.setState({currentImage: this.state.currentImage + 1});
            }
          }}
          style={{
            right: 0,
            position: 'absolute',
            height: Dimensions.get('screen').height,
            width: (Dimensions.get('window').width / 100) * 20,
            backgroundColor: 'transparent',
          }}></TouchableOpacity>

        <Text
          style={{
            top: 20,
            alignSelf: 'center',
            position: 'absolute',
            color: 'white',
            fontSize: 20,
          }}>
          {this.state.currentImage + 1 + '/ ' + this.state.photos.length}
          {JSON.stringify(this.state.animatedValues)}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            top: 70,
            width: '100%',
            position: 'absolute',
          }}>
          {this.state.photos.map((item, index) => (
            <View
              style={{
                marginHorizontal: 5,
                height: 5,
                width: 100 / this.state.photos.length + '%',
              }}>
              <AnimatedLineComponent
                goToPreviousPhoto={this.goToPreviousPhoto}
                goToNextPhoto={this.goToNextPhoto}
                start={
                  this.state.startAnimations[index]
                }></AnimatedLineComponent>
            </View>
          ))}
        </View>

        {/* <View
          style={{
            top: 50,
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
        </View> */}

        {/* <AnimatedLineComponent></AnimatedLineComponent> */}
      </View>
    );
  }
}

export default ViewImagesComponent;
