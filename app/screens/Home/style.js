import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container1: {
    flex: 9,
    backgroundColor: 'rgb(0,0,0)',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  container2: {
    flex: 2,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: 24
  },
  text: {
    textAlign: "center",
    width: 140,
    height: 37,
    color: 'white',
    flexDirection: 'column',
    fontSize: 28,
    fontFamily: 'DMSans',
    fontWeight: '700'
  },
  text1: {
    textAlign: "center",
    color: 'white',
    flexDirection: 'column',
    width: 94,
    height: 32,
    fontSize: 24,
    letterSpacing: 0,
    fontFamily: 'NunitoSans',
    fontWeight: '700',
    marginBottom: -20,
  },
  text2: {
    width: 300,
    height: 40,
    lineHeight: 20,
    letterSpacing: 0,
    fontWeight: '400',
    textAlign: 'center',
    color: 'rgb(154,159,164)',
    fontSize: 14,
    fontFamily: 'NunitoSans-Regular',
  },
  button: {
    width: 311,
    height: 35,
    borderWidth: 1,
    borderColor: 'rgb(50,145,200)',
    borderRadius: 4,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  img: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rectangle: {
    width: 16,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgb(255,255,255)',
    marginRight: 5,
    marginLeft: 5
  },
  minirectangle: {
    width: 8,
    height: 4,
    justifyContent: 'space-around',
    borderRadius: 2,
    backgroundColor: 'rgb(255,255,255)',
    opacity: 0.5,
  },
  login: {
    borderRadius: 4,
    width: 320,
    height: 48,
    marginBottom: 16,
    backgroundColor: 'rgb(251,112,0)'
  },
  loginText: {
    marginTop: 10,
    marginLeft: 137,
    fontFamily: 'NunitoSans',
    fontSize: 16,
    fontWeight: '600',
    color: 'white'
  },
  signup: {
    borderRadius: 4,
    width: 320,
    height: 48,
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 4,
    borderColor: 'rgb(50,145,200)',
    marginTop: 5
  },
  signupText: {
    marginTop: 10,
    marginLeft: 107,
    fontFamily: 'NunitoSans',
    fontWeight: '600',
    fontSize: 16,
    color: 'rgb(50,145,200)',
    fontSize: 16
  },
  signupImg: {
    width: 24,
    height: 24,
    marginLeft: 277,
    marginVertical: -20,
  }

});