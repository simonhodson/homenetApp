
import * as React from 'react';
import { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import Login from '../screens/authscreens/login';
import TabNavigator from './TabNavigator';
import Splashscreen from '../screens/splashscreen/splashscreen';
import { Header } from '../components/common';

const Stack = createStackNavigator();

const AuthStack = () => {
  const [user, setUser] = useState();
  const [initializing, setInitializing] = useState(true);

  // Handle user state changes globally
  function onAuthStateChanged(user) {
    if (user) {
      setUser(user);
      setInitializing(false);
    } else {
      bootstrap();
    }
  }

  const bootstrap = () => {
    const verifyUser = auth().currentUser;
    if (verifyUser) {
      setUser(verifyUser);
      setInitializing(false);
    } else {
      setInitializing(false);
    }
  };

  useEffect(() => {
    bootstrap();
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) {
    return <Splashscreen />;
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
          <Stack.Screen
            name="Home Net"
            component={TabNavigator}
            options={({ route }) => ({ title: route.params.name })}
          />
        )}
      </Stack.Navigator>
  );
};

export default AuthStack;
