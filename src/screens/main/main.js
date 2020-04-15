import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';
import DataRequestsService from '../../services/DataRequestsService';
import auth from '@react-native-firebase/auth';

// type Props = {
// }

class Main extends Component {

  componentDidMount() {
    const subscriber = auth().onAuthStateChanged((user) => {
      if (user === null) return null
    });
    return subscriber;
  }

  logout() {
    DataRequestsService.FBSignOut((err) => {
      console.log('No current user' + err);
    });
  }

  render() {
    const { wrapper } = styles;
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
  }
}

export default Main;
