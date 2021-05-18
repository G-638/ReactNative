import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center'
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  title: {
    marginTop: hp(-0.85),
    marginLeft: wp(28.8),
    marginRight: wp(28.53),
    fontWeight: 'bold',
    fontFamily: 'NunitoSans',
    color: 'rgb(0,85,146)',
    fontSize: 28
  },
  subTitle: {
    marginTop: hp(1.95),
    marginLeft: wp(27.2),
    marginRight: wp(26.93),
    color: 'rgb(65,74,84)',
    fontWeight: 'bold',
    fontFamily: 'NunitoSans',
    fontSize: 16
  },
  logout: {
    borderRadius: 4,
    marginLeft: wp(74.6),
    marginRight: wp(11.46),
    marginTop: hp(2.6),
    borderWidth: 2,
    backgroundColor: 'white',
    borderRadius: 12,
    borderColor: 'rgb(50,145,200)',
    justifyContent: 'space-between'
  },
  imgStyle: {
    width: 28,
    height: 28,
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(251,112,0)',
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
  },

});