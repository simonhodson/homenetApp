import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomTabBar } from '@react-navigation/bottom-tabs';

const styles = StyleSheet.create({
  wrapper: { backgroundColor: 'grey', paddingTop: 10 },
});

const TabBar = props => (
  <BottomTabBar
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    backBehavior="initialRoute"
    style={styles.wrapper}
  />
);

export default TabBar;
