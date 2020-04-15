import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PreviewWindow = (props) => {
  const { icon } = props;
  const { frame, subPanel, panTitle } = styles;

  return (
    <View style={frame}>
      <Text style={panTitle}>Panel Title Here</Text>
      <TouchableOpacity style={subPanel}>
        <View><Text>Stuff in here</Text></View>
      </TouchableOpacity>
    </View>
  );
};

export default PreviewWindow;

const styles = StyleSheet.create({
  frame: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '92%',
    height: 280,
    borderRadius: 14,
    backgroundColor: 'rgba(7,7,7,0.2)',
    padding: 10,
  },
  subPanel: {
    width: '100%',
    height: 200,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  panTitle: {
    position: 'absolute',
    fontSize: 18,
    top: 10,
    left: 10,
  },
});
