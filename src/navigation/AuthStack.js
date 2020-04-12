
import * as React from 'react';
import { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import DatRequestsService from '../services/DataRequestsService';
import Login from '../screens/authscreens/login';
import Main from '../screens/main/main';
import Splashscreen from '../screens/splashscreen/splashscreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  const [user, setUser] = useState();
  const [initializing, setInitializing] = useState(true);

  // // Handle user state changes
  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   // start Async process and return
  //   // const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   // return subscriber; // unsubscribe on unmount
  // }, []);

  if (initializing) {
    return <Login/>;
  }

  return (
      <Stack.Navigator>
        { !user ? (
          <Stack.Screen
            name="Sign In"
            component={Login}
            options={{ title: 'Sign in' }}
          />
        ) : (
          <Stack.Screen name="Home" component={Main} />
        )}
      </Stack.Navigator>
  );
};

export default AuthStack;
