import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 150,
    minHeight: '100%',
  },
  signText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputStyle: {
    width: '100%',
    height: '100%',
  },
  fieldSet: {
    display: 'flex',
    alignItems: 'center',
    margin: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    height: 40,
    width: 250,
    marginVertical: 20,
  },
  legend: {
    position: 'absolute',
    top: -18,
    left: 7,
    fontWeight: 'bold',
  },
});
