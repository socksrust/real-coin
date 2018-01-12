import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux'
import Home from './scenes/Home'

export default class App extends Component<{}> {
  render() {
    return (
      <Router navigationBarStyle={styles.navBar} titleStyle={styles.title}>
        <Stack key="root">
          <Scene key="home" component={Home} title="Accounts" initial/>
        </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#7A4EBF',
    height: 60
  },
  title: {
    flexDirection: 'column',
    alignSelf: 'center',
    marginBottom: -10,
    color: '#ffffff'
  }
})
