import {StyleSheet, Dimensions} from 'react-native';

const saved_item = StyleSheet.create({
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

const saved_screen = StyleSheet.create({
  header_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#ea8331',
  },
  icon: {
    color: '#ea8331',
  },
});

export {saved_item, saved_screen};
