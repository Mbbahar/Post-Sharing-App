import {StyleSheet, Dimensions} from 'react-native';

const device_size = Dimensions.get('window');

const form_component = StyleSheet.create({
  keyboard_view: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  container: {
    flex: 1,
    marginTop: 30,
  },
  box: {
    marginVertical: 30,
    alignSelf: 'center',
  },
  button: {
    margin: 20,
    borderRadius: 15,
    fontSize: 20,
    height: 50,
    width: device_size.width * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4b866',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },

  TextInputStyle: {
    fontSize: 17,
    color: '#272424',
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text_input_icon: {
    alignSelf: 'center',
    color: '#bdbdbd',
    marginHorizontal: 5,
  },
  navButton: {
    alignSelf: 'center',
  },
  navButtonText: {
    fontSize: 20,
    color: '#ea8331',
  },
  logo: {
    height: 250,
    width: 250,
    alignSelf: 'center',
  },
});
export {form_component};
