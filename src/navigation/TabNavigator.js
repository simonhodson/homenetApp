/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../screens/main/main';
import List from '../screens/list/list';
import Scanner from '../screens/scanner/scanner';
import MyApp from '../screens/myapp/myApp';
import Cupboards from '../screens/cupboard/cupboard';
import { NavIcon } from '../components/common';
import ListIcon from '../assets/nav-icons/nav-list-50.png';
import HomeIcon from '../assets/nav-icons/nav-home-50.png';
import MyAppIco from '../assets/nav-icons/nav-myapp-50.png';
import Food from '../assets/nav-icons/nav-apple-64.png';
import Barcode from '../assets/nav-icons/nav-barcode-50.png';
import { Header } from '../components/common';

const TabNavigator = createBottomTabNavigator();

export default function BottomTabBar({ navigation }) {
  const { barStyle } = styles;
  return (
  <TabNavigator.Navigator
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      style: barStyle,
    }}
  >
    <TabNavigator.Screen
      name="Home"
      component={Main}
      options={({ navigation, route }) => ({
        headerTitle: (props) => <Header image={HomeIcon} {...props} />,
        // title: route.params.name,
        tabBarIcon: () => <NavIcon icon={HomeIcon} />,
      })}
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
      name="Scan Item"
      component={Scanner}
      options={{
        displayName: 'Scan',
        title: 'Scan Item',
        tabBarIcon: ({ focused }) => <NavIcon icon={Barcode} />,
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
