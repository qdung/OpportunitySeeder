import {StyleSheet} from 'react-native';
import {Colors} from 'theme';
import {scaleWidth} from 'utils/responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 50,
    color: 'white',
    fontSize: 25,
  },
  loginForm: {
    marginTop: 50,
    flexDirection: 'row',
  },
  row1: {
    position: 'absolute',
    left: 15,
    top: 180,
    flexDirection: 'row',
  },
  row2: {
    position: 'absolute',
    left: 30,
    top: 230,
    flexDirection: 'row',
  },
  input: {
    width: scaleWidth(70),
    height: 40,
    borderRadius: 50,
    borderColor: Colors.input_field,
    borderWidth: 2,
    paddingLeft: 20,
    paddingRight: 40,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    position: 'absolute',
    right: 15,
    top: 10,
  },
  forgotPass: {
    position: 'absolute',
    left: 15,
    bottom: 100,
  },
  submit: {
    position: 'absolute',
    left: 15,
    bottom: 50,
    height: 40,
    paddingHorizontal: 20,
    backgroundColor: Colors.main_light,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 18,
    // fontFamily: 'Poppins-Regular',
  },
  googleBtn: {
    position: 'absolute',
    bottom: 0,
    height: 40,
    paddingHorizontal: 20,
    backgroundColor: Colors.main_light,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
