import {StyleSheet, Dimensions} from 'react-native';

const post_input = StyleSheet.create({
  container: {
    backgroundColor: '#fb8c0025',
    justifyContent: 'space-between',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },

  input: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },

  cartButtonContainer: {
    flexDirection: 'row',
    backgroundColor: '#ea8331',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    top: 0,
    padding: 20,
  },
  TextInputStyle: {
    flex: 1,
    fontSize: 17,
    color: '#fff',
    backgroundColor: '#eceff125',
    borderRadius: 10,
    marginRight: 5,
    paddingLeft: 10,
  },
  cartIcon: {
    width: 45,
    height: 45,
    tintColor: 'white',
  },
});

const post_item = StyleSheet.create({
  container: {
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,

    backgroundColor: 'white',
    margin: 10,
    elevation: 10,
  },
  contHeader: {
    flex: 1,
    backgroundColor: '#fb8c00',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopRightRadius: 20,
    padding: 5,
  },
  contMessage: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  contDate: {
    fontSize: 10,
    color: '#fff',
  },
});

const empty_list = StyleSheet.create({
  lottie: {
    marginVertical: 20,
    height: 300,
    width: 300,
    alignSelf: 'center',
  },
  text: {
    marginTop: 20,
    alignSelf: 'center',
    fontSize: 17,
    color: 'orange',
  },
});
export {post_input, post_item, empty_list};
