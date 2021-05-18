import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textboxfield: {
    fontFamily: 'NunitoSans',
    fontSize: 16,
    textAlignVertical: 'top',
    fontWeight: '500',
  },
  focusedTextInput: {
    borderColor: 'rgb(223,227,235)',
    backgroundColor: 'white',
  },
  title: {
    padding: 25,
    textAlign: 'center',
    color: 'rgb(0,85,146)',
    fontSize: 32,
    letterSpacing: 0,
    fontFamily: 'DMSans',
    fontWeight: '700',
  },
  googleText: {
    color: 'white',
    paddingLeft: 30,
    paddingTop: 10,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.25
  },
  input: {
    width: 320,
    height: 58,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'rgb(244,245,249)',
    backgroundColor: 'rgb(244,245,249)',
    marginTop: 5,
  },
  emailError: {
    marginRight: 210,
    fontSize: 12,
    width: 103,
    height: 16,
    color: 'rgb(250,62,62)',
    marginBottom: 8
  },
  passwordError: {
    marginRight: 160,
    fontSize: 12,
    width: 150,
    height: 16,
    color: 'rgb(250,62,62)',
    marginBottom: 8
  },
  forgetPasswordStyle: {
    color: 'rgb(14,126,191)',
    fontSize: 14,
    paddingLeft: 200,
    paddingTop: 5,
    paddingBottom: 15,
  },
  login: {
    height: 48,
    width: 320,
    backgroundColor: 'rgb(232,233,234)',
    textAlign: 'center',
    borderRadius: 4,
  },
  splitScreen: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 15
  },
  lineStyle: {
    flex: 1,
    marginLeft: 28,
    width: 140,
    height: 1,
    backgroundColor: 'rgb(223,227,235)',
  },
  textStyle: {
    width: 50,
    textAlign: 'center',
    color: 'rgb(110,116,124)',
  },
  logintext: {
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'NunitoSans',
    fontWeight: '600',
    fontSize: 16,
    color: 'rgb(154,159,164)',
    height: 72,
    marginTop: 12,
  },
  googlelogin: {
    flexDirection: 'row',
    width: 320,
    height: 48,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: 'rgb(66,133,244)',
    backgroundColor: 'rgb(66,133,244)',
    marginTop: 10,
    marginBottom: 10
  },
  ImageIconStyle: {
    padding: 10,
    margin: 10,
    height: 24,
    width: 24,
  },
  endContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 80,
    marginBottom: 30
  },
  accountStyle: {
    fontFamily: 'NunitoSans',
    fontWeight: '600',
    fontSize: 16,
    color: 'rgb(65,74,84)'
  },
  signUpStyle: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 16,
    color: 'rgb(50,145,200)',
  },
  signupImg: {
    width: 16,
    height: 16,
    marginTop: 5
  },
  loginBg: {
    backgroundColor: 'rgb(251,112,0)',
  },
  loginTextBg: {
    color: 'white',
  },
  border: {
    borderColor: 'rgb(250,62,62)',
  },
  signInGoogle: {
    backgroundColor: 'white',
    width: 46,
    height: 44,
  }
});