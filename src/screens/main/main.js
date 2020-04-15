import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import DataRequestsService from '../../services/DataRequestsService';

// type Props = {
// }

const Main = ({ route }) => {
  const { wrapper } = styles;

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      if (user === null) return null;
    });
    return subscriber;
  }, []);

  function logout() {
    DataRequestsService.FBSignOut((err) => {
      console.log(`No current user${err}`);
    });
  }

  return (
    <View style={wrapper}>
      <Text>Main Screen</Text>
      <Button
        title="Sign Out"
        accessibilityLabel="Sign Out"
        onPress={this.logout}
      />
    </View>
  );
};

export default Main;
