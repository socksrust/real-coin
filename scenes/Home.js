import React from 'react'
import { StyleSheet, FlatList, Text } from 'react-native'
import CoinCard from '../components/CoinCard'
import {
  gql,
  graphql,
} from 'react-apollo';

class Home extends React.Component {
  render () {
    const {data: {loading, error, coins}} = this.props
    if (loading) {
      return (
        <Text>Loading...</Text>
      )
    }

    return (
      <FlatList
        data={coins.map((coin, key)=>
          Object.assign({}, coin, {
            backgroundColor: key % 2 === 0 ? '#272C40' : '#363D59',
            key
          })

        )}
        renderItem={({item}) => <CoinCard key={item.key} image={item.image} displayName={item.displayName} name={item.name} currentPrice={item.price} backgroundColor={item.backgroundColor}/>}
      />
    )
  }
}

export const homeQuery = gql`
  query {
    coins {
      image
      displayName
      name
      price
    }
  }
`;

export default graphql(homeQuery)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 90
  }
})
