import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FeedbackApp from './src/FeedbackApp';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginPage from './src/screens/LoginScreen';
import InsturctorMainScreen from './src/screens/InstructorMainScreen'

const RootStack = createStackNavigator(
  {
    Home: FeedbackApp,
    Login: LoginPage,
    InsturctorMain: InsturctorMainScreen,
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}