/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../screens/main/main';
import List from '../screens/list/list';

const TabNavigator = createBottomTabNavigator();

export default function TabEntry() {
  return (
  <TabNavigator.Navigator>
    <TabNavigator.Screen name="Home" component={Main} />
    <TabNavigator.Screen name="List" component={List} />
  </TabNavigator.Navigator>
  );
}
