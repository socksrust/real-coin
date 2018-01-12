import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class CoinCard extends React.Component {
  render () {
    const { backgroundColor } = this.props
    return (
      <View style={[styles.wrapper, {backgroundColor: backgroundColor}]}>
        <View style={styles.imageWrapper}>
          <View style={styles.image}></View>
        </View>
        <View style={styles.infosWrapper}>
          <View style={styles.basicInfosWrapper}>
            <View>
              <Text style={styles.coinName}>Bitcoin</Text>
              <View style={{flexDirection: 'row', marginTop: 3}}>
                <View style={{width: 50, backgroundColor: '#000000', borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{color: '#ffffff', fontSize: 11}}>#tag1</Text>
                </View>
                <View style={{width: 50, backgroundColor: '#000000', borderRadius: 50, alignItems: 'center', justifyContent: 'center', marginLeft: 3}}>
                  <Text style={{color: '#ffffff', fontSize: 11}}>#tag2</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.lightText}>Created at: 10/06/2019</Text>
            </View>
          </View>
          <View style={styles.advancedInfosWrapper}>
            <View style={styles.advancedInfos}>
              <Text style={styles.coinName}>Price: <Text style={{color: '#73F2C8'}}>$16483,56</Text></Text>
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
    backgroundColor: 'linear-gradient(45deg, rgb(64, 181, 255), rgb(102, 255, 139))',
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
