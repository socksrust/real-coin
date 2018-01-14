import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  height: 120;
  flex-direction: row;
  background: ${props => props.backgroundColor ? props.backgroundColor : 'white'};
`

const ImageWrapper = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`

const ImageInnerWrapper = styled.View`
  background-color: #ffffff;
  height: 68;
  width: 68;
  border-radius: 50;
  display: flex;
  margin-left: 0;
`

const CoinImage  = styled.Image`
  width: 68;
  height: 68;
`
/*basic - infos*/

const InfosWrapper = styled.View`
  flex: 4;
  flex-direction: row;
`

const BasicInfosWrapper = styled.View`
  flex: 1;
  margin-top: 26;
  margin-bottom: 16;
  justify-content: space-between
`

const DisplayNameText = styled.Text`
  color: #ffffff;
  font-size: 12;
  font-weight: bold;
`
const NameWrapper = styled.View`
  flex-direction: row;
  margin-top: 3;
  width: 50;
  background-color: #000000;
  border-radius: 50;
  align-items: center;
  justify-content: center;
`

const NameText = styled.Text`
  color: #ffffff;
  fontSize: 11;
`
const LightText = styled.Text`
  color: gray;
  font-size: 10;
  font-weight: bold;
`

/*advanced - infos*/

const AdvancedInfosWrapper = styled.View`
  flex: 1;
  margin-top: 26;
  margin-bottom: 26;
`

const CoinPriceText = styled.Text`
  color: #ffffff;
  font-size: 12;
  font-weight: bold;
`

const InfoSpan = styled.Text`
  color: #73F2C8;
`

const GraphWrapper = styled.View`
  flex: 1;
  margin-bottom: 18;
  justify-content: flex-start;
  align-items: center;
`



export default class CoinCard extends React.Component {
  render () {
    const { image, backgroundColor, currentPrice, name, displayName } = this.props
    return (
      <Wrapper backgroundColor={backgroundColor}>
        <ImageWrapper>
          <ImageInnerWrapper>
            <CoinImage
              source={{uri: image}}
            />
          </ImageInnerWrapper>
        </ImageWrapper>
        <InfosWrapper>
          <BasicInfosWrapper>
            <View>
              <DisplayNameText>{displayName}</DisplayNameText>
              <NameWrapper>
                <NameText>{name}</NameText>
              </NameWrapper>
            </View>
            <View>
              <LightText>Created at: 10/06/2019</LightText>
            </View>
          </BasicInfosWrapper>
          <AdvancedInfosWrapper>
            <View>
              <CoinPriceText>Price: <InfoSpan>${currentPrice}</InfoSpan></CoinPriceText>
              <CoinPriceText>Change: <InfoSpan>$29.41%</InfoSpan></CoinPriceText>
            </View>
            <GraphWrapper>
              <Text style={{fontSize: 30, color: '#FFFFFF', marginTop: 15}}>X</Text>
            </GraphWrapper>
          </AdvancedInfosWrapper>
        </InfosWrapper>
      </Wrapper>
    )
  }
}