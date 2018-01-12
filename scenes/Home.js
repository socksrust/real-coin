import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import CoinCard from '../components/CoinCard'

export default class Home extends React.Component {
  render () {
    return (
      <View>
        <CoinCard backgroundColor="#272C40"/>
        <CoinCard backgroundColor="#363D59"/>
        <CoinCard backgroundColor="#272C40"/>
        <CoinCard backgroundColor="#363D59"/>
        <CoinCard backgroundColor="#272C40"/>
        <CoinCard backgroundColor="#363D59"/>
      </View>
    )
  }
}

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
