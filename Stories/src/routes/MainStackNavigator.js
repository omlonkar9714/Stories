import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StoriesList from '../screens/StoriesList';
import ViewStories from '../screens/ViewStories';

const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="StoriesList" component={StoriesList} />
      <Stack.Screen name="ViewStories" component={ViewStories} />
    </Stack.Navigator>
  );
}
