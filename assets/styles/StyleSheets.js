import React from 'react'
import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  // hBlack: {
  //   fontFamily: 'Anuphan-Bold',
  //   color: COLORS.black
  // },
  // hWhite: {
  //   fontFamily: 'Anuphan-Bold',
  //   color: COLORS.white
  // },
  // bobyBlack: {
  //   fontFamily: 'Anuphan-Regular',
  //   color: COLORS.black
  // },
  // bobyWhite: {
  //   fontFamily: 'Anuphan-Regular',
  //   color: COLORS.white
  // },
  // bobyWhite: {
  //   fontFamily: 'Anuphan-Regular',
  //   color: COLORS.gray
  // },
  imageRadius: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  twinObj: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: COLORS.dark,
    borderRadius: SIZES.borderRadius,
    borderTopWidth: 0,
    bottom: 15,
    right: 10,
    left: 10,
    height: 55,
    paddingTop: 5
  },
  txInput: {
    height: 40,
    borderColor: COLORS.grey,
    borderWidth: 1,
    marginTop: SIZES.margin/2.5,
    paddingLeft: SIZES.padding/3,
  }
});

export default styles;


// h1: 30,
// h2: 22,
// h3: 16,
// h4: 14,
// h5: 12,