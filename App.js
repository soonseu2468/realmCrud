/*Example of RealM Database in React Native*/
import React from 'react';
//For react-navigation 3.0+
//import { createAppContainer, createStackNavigator } from 'react-navigation';
//For react-navigation 4.0+
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import homeScreen from './pages/homeScreen';
import addTopic from './pages/Realm/addTopic';
import viewRealm from './pages/Realm/viewRealm';
import viewTopic from './pages/FetchAPI/Fetch';
import realmDescription from './pages/Realm/realmDescription';
import topicDescription from './pages/FetchAPI/topicDescription';
import Redux from './pages/Redux/Redux';

const App = createStackNavigator({
  homeScreen: {
    screen: homeScreen,
    navigationOptions: {
      title: 'Learning React-Native',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },

  Fetch: {
    screen: viewTopic,
    navigationOptions: {
      title: 'Fetch API from omdb',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },

  viewRealm: {
    screen: viewRealm,
    navigationOptions: {
      title: 'View Realm data',
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

  realmDescription: {
    screen: realmDescription,
    navigationOptions: {
      title: 'Description',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },

  Redux: {
    screen: Redux,
    navigationOptions: {
      title: 'Redux',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },

});
export default createAppContainer(App);