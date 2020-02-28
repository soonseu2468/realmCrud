/*Example of RealM Database in React Native*/
import React from 'react';
//For react-navigation 3.0+
//import { createAppContainer, createStackNavigator } from 'react-navigation';
//For react-navigation 4.0+
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import homeScreen from './pages/homeScreen';
import addTopic from './pages/addTopic';
import viewTopic from './pages/viewTopic';
import topicDescription from './pages/topicDescription';

const App = createStackNavigator({
  homeScreen: {
    screen: homeScreen,
    navigationOptions: {
      title: 'HomeScreen',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },

  viewTopic: {
    screen: viewTopic,
    navigationOptions: {
      title: 'View All User',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },

  addTopic: {
    screen: addTopic,
    navigationOptions: {
      title: 'Add New Topic',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },

  topicDescription: {
    screen: topicDescription,
    navigationOptions: {
      title: 'Description',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },
});
export default createAppContainer(App);