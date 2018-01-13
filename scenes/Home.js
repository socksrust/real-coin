import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import CoinCard from '../components/CoinCard'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Home extends React.Component {
  render () {
    return (
      <FlatList
        data={[
          {key: 'a', color: '#272C40'},
          {key: 'b', color: '#363D59'},
          {key: 'c', color: '#272C40'},
          {key: 'd', color: '#363D59'},
          {key: 'e', color: '#272C40'},
          {key: 'f', color: '#363D59'},
          {key: 'g', color: '#272C40'},
          {key: 'h', color: '#363D59'},
          {key: 'i', color: '#272C40'},
          {key: 'j', color: '#363D59'},
          {key: 'k', color: '#272C40'},
          {key: 'l', color: '#363D59'}
        ]}
        renderItem={({item}) => <CoinCard backgroundColor={item.color}/>}
      />
    )
  }
}

//const MY_QUERY = gql`query { todos { text } }`;

const MY_QUERY = gql`
  query {
    coins {
      name
    }
  }
`

const HomeWithData = graphql(MY_QUERY)(Home)

export default HomeWithData



