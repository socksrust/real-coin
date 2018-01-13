import React from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native'
import CoinCard from '../components/CoinCard'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Home extends React.Component {
  render () {
    if (this.props.data.loading) {
      return <Text>error</Text>
    }
    return (
      <FlatList
        data={[]}
        renderItem={({item}) => <CoinCard/>}
      />
    )
  }
}

//const MY_QUERY = gql`query { todos { text } }`;

const MY_QUERY = gql`
{
  coins {
    name, price
  }
}
`

const HomeWithData = graphql(MY_QUERY)(Home)

export default HomeWithData



