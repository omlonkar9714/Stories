import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainStackNavigator from './routes/MainStackNavigator';

export default function AppStart() {
  return (
    <NavigationContainer>
      <MainStackNavigator></MainStackNavigator>
    </NavigationContainer>
  );
}
