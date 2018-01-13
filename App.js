import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux'
import Home from './scenes/Home'
import { ApolloClient } from 'apollo-client';
import { ApolloProvider, createNetworkInterface } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'http://graphql-coin.herokuapp.com/graphql'
});

networkInterface.use([{
  applyMiddleware(req, next) {
    setTimeout(next, 500);
  },
}]);

const client = new ApolloClient({
  networkInterface: networkInterface
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
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
