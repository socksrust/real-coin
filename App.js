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
import { ApolloProvider } from 'react-apollo';
import { HttpLink, createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://graphql-coin.herokuapp.com/graphql' }),
  cache: new InMemoryCache()
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router navigationBarStyle={styles.navBar} titleStyle={styles.title}>
          <Stack key="root">
            <Scene key="home" component={Home} title="Accounts" initial/>
          </Stack>
        </Router>
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
