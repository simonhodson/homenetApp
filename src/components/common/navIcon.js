import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const NavIcon = (props) => {
  const { icon } = props;
  const { iconStyle } = styles;
  return (
    <View>
      <Image source={icon} style={iconStyle} />
    </View>
  );
};

export { NavIcon };

const styles = StyleSheet.create({
  iconStyle: {
    width: 40,
    height: 40,
  },
});

NavIcon.displayName = 'NavIcon';
