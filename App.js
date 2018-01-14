import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux'
import Home from './scenes/Home'
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
  toIdValue,
} from 'react-apollo';


const networkInterface = createNetworkInterface({ uri: 'https://graphql-coin.herokuapp.com/graphql' });

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }

    const token = 'token';
    req.options.headers.authorization = token ? `Bearer ${token}` : null;
    next();
  },
}]);

const client = new ApolloClient({
  networkInterface,
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
