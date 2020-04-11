/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import auth from '@react-native-firebase/auth';


const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const username = 'simon@testgoog.com';
  const pass = 'SuperSecretPassword!';

  auth()
    .signInAnonymously()
    .catch(err => {
      console.log(`Auth/Anonymouse ${err}`)
    })

  // auth()
  //   .createUserWithEmailAndPassword(username, pass)
  //   .then(() => {
  //     console.log('User account created & signed in!');
  //   })
  //   .catch((error) => {
  //     if (error.code === 'auth/email-already-in-use') {
  //       console.log('That email address is already in use!');
  //       auth().signInAnonymously();
  //       console.log(user);
  //     }

  //     if (error.code === 'auth/invalid-email') {
  //       console.log('That email address is invalid!');
  //     }

  //     console.error(error);
  //   });

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    console.log(user)
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  const isAuthed = user ? <Text>Authed {user.email}</Text> : <Text>No Authed</Text>;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
        >
        <View style={styles.centerStyle}>
          {isAuthed}
        </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  centerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default App;
