import React, {useEffect, useState, useRef} from 'react';
import {

  View,
 
  StyleSheet,

  Dimensions,

} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {imageUrl} from '../../Config/Apis.json';
import Avatar from '../../Components/Avatar';
import AppText from '../../Components/AppText';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import CarouselCardItem, {SLIDER_WIDTH, ITEM_WIDTH} from './CarouselCardItems';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const {width, height} = Dimensions.get('window');

const Comment = ({img, name, time, message}) => {
  //  console.log(Name)

  //  console.log(route.params)
  return (
    <View
      style={{
        flexDirection: 'row',
        width: width * 0.85,
        marginRight: width * 0.03,
        marginVertical: height * 0.01,
        // padding: 5,
        justifyContent: 'center',
        flexDirection: 'column',
        alignSelf: 'flex-end',
        alignItems: 'center',
      }}>
      <View style={{justifyContent: 'flex-start', flexDirection: 'column'}}>
        <View
          style={{
            justifyContent: 'flex-start',
            flexDirection: 'row',
            width: width * 0.85,
          }}>
          <Avatar
            size="small"
            source={{
              uri: `${imageUrl}/${img}`,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              padding: 4,
              justifyContent: 'space-between',
              alignContent: 'center',
              left: 5,
              width: width * 0.75,
            }}>
            <View
              style={{
                justifyContent: 'flex-start',
                flexDirection: 'column',
                padding: 3,
              }}>
              <AppText
                nol={1}
                textAlign="left"
                family="Poppins-SemiBold"
                size={hp('1.9%')}
                color="black"
                Label={name}
              />
            </View>
            <View
              style={{
                justifyContent: 'flex-start',
                flexDirection: 'column',
                padding: 3,
              }}>
              <AppText
                nol={1}
                textAlign="left"
                family="Poppins-SemiBold"
                size={hp('1.5%')}
                color="grey"
                Label={time}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            width: '90%',
          }}>
          <AppText
            nol={12}
            textAlign="left"
            family="Poppins-Regular"
            size={hp('1.9%')}
            color="black"
            Label={message}
          />
        </View>
      </View>
    </View>
  );
};
export default Comment;

const styles = StyleSheet.create({});
