import * as React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Header = (props) => {
  const { imStyle, wrapper, textStyle, imgWrap } = styles;
  const { image, title } = props;
  return (
    <View style={wrapper}>
      <View style={imgWrap}>
      <Image source={image} style={imStyle} />
      </View>
      <Text style={textStyle}>{title}</Text>
    </View>
  );
};

export { Header };

Header.displayName = 'Header';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 80,
    minHeight: 80,
    width: '100%',
    backgroundColor: '#ffffff'
  },
  imgWrap: {
    position: 'absolute',
    right: 10,
  },
  imStyle: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'tomato',
    height: 40,
    width: 40,
  },
  textStyle: {
    fontSize: 20,
  },
});
