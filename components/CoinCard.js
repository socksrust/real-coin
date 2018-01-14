import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default class CoinCard extends React.Component {
  render () {
    const { image, backgroundColor, currentPrice, name, displayName } = this.props
    return (
      <View style={[styles.wrapper, {backgroundColor: backgroundColor}]}>
        <View style={styles.imageWrapper}>
          <View style={styles.image}>
            <Image
              style={{width: 68, height: 68}}
              source={{uri: image}}
            />
          </View>
        </View>
        <View style={styles.infosWrapper}>
          <View style={styles.basicInfosWrapper}>
            <View>
              <Text style={styles.coinName}>{displayName}</Text>
              <View style={{flexDirection: 'row', marginTop: 3}}>
                <View style={{width: 50, backgroundColor: '#000000', borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{color: '#ffffff', fontSize: 11}}>{name}</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.lightText}>Created at: 10/06/2019</Text>
            </View>
          </View>
          <View style={styles.advancedInfosWrapper}>
            <View style={styles.advancedInfos}>
              <Text style={styles.coinName}>Price: <Text style={{color: '#73F2C8'}}>${currentPrice}</Text></Text>
              <Text style={styles.coinName}>Change: <Text style={{color: '#73F2C8'}}>$29.41%</Text></Text>
            </View>
            <View style={styles.graphWrapper}>
              <Text style={{fontSize: 30, color: '#FFFFFF', marginTop: 15}}>X</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: 120,
    flexDirection: 'row'
  },
  imageWrapper: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    backgroundColor: '#ffffff',
    height: 68,
    width: 68,
    borderRadius: 50,
    display: 'flex',
    marginLeft: 0
  },
  infosWrapper: {
    flex: 4,
    flexDirection: 'row'
  },
  basicInfosWrapper: {
    flex: 1,
    marginTop: 26,
    marginBottom: 16,
    justifyContent: 'space-between'
  },
  advancedInfosWrapper: {
    flex: 1,
    marginTop: 26,
    marginBottom: 26
  },
  coinName: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold'
  },
  lightText: {
    color: 'gray',
    fontSize: 10,
    fontWeight: 'bold'
  },
  graphWrapper: {
    flex: 1,
    marginBottom: 18,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})
