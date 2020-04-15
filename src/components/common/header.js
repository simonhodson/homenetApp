import * as React from 'react';
import { SafeAreaView, Image, Text, StyleSheet } from 'react-native';

const Header = (props) => {
  const { imStyle, wrapper, textStyle } = styles;
  const { image, title } = props;
  return (
    <SafeAreaView style={wrapper}>
      <Image source={image} style={imStyle} />
      <Text style={textStyle}>{title}</Text>
    </SafeAreaView>
  );
};

export { Header };

Header.displayName = 'Header';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 100,
  },
  imStyle: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'tomato',
    height: 30,
    width: 30,
  },
  textStyle: {
    fontSize: 28,
    color: 'grey',
  },
});
