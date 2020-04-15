import { createStackNavigator } from '@react-navigation/stack';
import Main from '../screens/main/main';
import List from '../screens/list/list';
import Scanner from '../screens/scanner/scanner';
import Cupboard from '../screens/cupboard/cupboard';
import MyApp from '../screens/myapp/myApp';

const HomeStack = createStackNavigator(
  {
    Home: Main,
  },
  {
    // initialRouteName: 'Home',
    defaultNavigationOptions: {
      header: null,
    },
  },
  {
    navigationOptions: {
      // temporarily disbaled
      gesturesEnabled: false,
    },
  },
);

const ListStack = createStackNavigator(
  {
    List,
  },
  {
    // initialRouteName: 'Home',
    defaultNavigationOptions: {
      header: null,
    },
  },
  {
    navigationOptions: {
      // temporarily disbaled
      gesturesEnabled: false,
    },
  },
);

const SyncStack = createStackNavigator(
  {
    Scanner,
  },
  {
    // initialRouteName: 'Home',
    defaultNavigationOptions: {
      header: null,
    },
  },
  {
    navigationOptions: {
      // temporarily disbaled
      gesturesEnabled: false,
    },
  },
);

const CupboardStack = createStackNavigator(
  {
    Cupboard,
  },
  {
    // initialRouteName: 'Home',
    defaultNavigationOptions: {
      header: null,
    },
  },
  {
    navigationOptions: {
      // temporarily disbaled
      gesturesEnabled: false,
    },
  },
);

const MyAppStack = createStackNavigator(
  {
    MyApp,
  },
  {
    // initialRouteName: 'Home',
    defaultNavigationOptions: {
      header: null,
    },
  },
  {
    navigationOptions: {
      // temporarily disbaled
      gesturesEnabled: false,
    },
  },
);

export {
  HomeStack, ListStack, SyncStack, MyAppStack, CupboardStack,
};
