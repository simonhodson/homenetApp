/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../screens/main/main';
import List from '../screens/list/list';
import Sync from '../screens/sync/sync';
import MyApp from '../screens/myapp/myApp';
import Cupboards from '../screens/cupboard/cupboard';
import { NavIcon } from '../components/common';
import ListIcon from '../assets/nav-icons/nav-list-50.png';
import HomeIcon from '../assets/nav-icons/nav-home-50.png';
import MyAppIco from '../assets/nav-icons/nav-myapp-50.png';
import Food from '../assets/nav-icons/nav-apple-64.png';
import SyncIcon from '../assets/nav-icons/nav-sync-50.png';

const TabNavigator = createBottomTabNavigator();

export default function BottomTabBar() {
  const { barStyle } = styles;
  return (
  <TabNavigator.Navigator
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      showLabel: false,
      style: barStyle,
    }}
  >
    <TabNavigator.Screen
      name="Home"
      component={Main}
      options={{
        title: 'none',
        displayName: 'Home',
        tabBarIcon: ({ focused }) => <NavIcon icon={HomeIcon} />,
      }}
    />
    <TabNavigator.Screen
      name="List"
      component={List}
      options={{
        displayName: 'List',
        title: 'List',
        tabBarIcon: ({ focused }) => <NavIcon icon={ListIcon} />,
      }}
      />
    <TabNavigator.Screen
      name="Sync"
      component={Sync}
      options={{
        displayName: 'Sync',
        title: 'Sync',
        tabBarIcon: ({ focused }) => <NavIcon icon={SyncIcon} />,
      }}
      />
    <TabNavigator.Screen
      name="Cupboards"
      component={Cupboards}
      options={{
        displayName: 'Cupboards',
        title: 'Cupboards',
        tabBarIcon: ({ focused }) => <NavIcon icon={Food} />,
      }}
      />
    <TabNavigator.Screen
      name="MyApp"
      component={MyApp}
      options={{
        displayName: 'MyApp',
        title: 'MyApp',
        tabBarIcon: ({ focused }) => <NavIcon icon={MyAppIco} />,
      }}
    />
  </TabNavigator.Navigator>
  );
}

const styles = StyleSheet.create({
  barStyle: {
    height: 60,
  },
});
