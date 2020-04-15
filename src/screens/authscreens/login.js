/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import {
  View, Text, TextInput, Button, ActivityIndicator,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import DataRequestsService from '../../services/DataRequestsService';

// type Props = {
//   styles: Props.object
// }

class Login extends Component {
  constructor() {
    super();
    this.state = {
      signInOrError: 'Sign In or Create User',
      username: '',
      password: '',
      isConnecting: true,
    };
    this.subscriber = null;
  }

  componentDidMount() {
    this.subscriber = auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  componentWillUnmount() { return this.subscriber(); }
 

  // Handle user state changes
  onAuthStateChanged = (user) => {
    if (user !== null) {
      user.getIdToken(true)
        .then((token) => {
          DataRequestsService.setStoredData('Token', token);
        })
        .catch((err) => err);
    }
    this.reset();
    // save token ans navigate
  }

  reset = () => {
    this.setState({ isConnecting: false, signInOrError: 'Sign In or Create User' });
  }

  loginUser = () => {
    const { username, password } = this.state;
    this.setState({ isConnecting: true });
    auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => { this.setState({ isConnecting: false }); })
      .catch((error) => {
        if (error.code === 'auth/wrong-password') { this.setState({ signInOrError: 'Invalid Password' }); }
        if (error.code === 'auth/invalid-email') { this.setState({ signInOrError: 'Invalid Email' }); }
        if (error.code === 'auth/user-disabled') { this.setState({ signInOrError: 'Error with account' }); }
        if (error.code === 'auth/user-not-found') { this.setState({ signInOrError: 'User not found' }); }
        if (error.code === 'auth/too-many-requests') { this.setState({ signInOrError: 'Too Many Attempts' }); }
        setTimeout(this.reset, 2000);
      });

    // Use auth as a user
    // If not a user run create user
    // If skip sign in anonamously
  }

  render() {
    const {
      username, password, signInOrError, isConnecting,
    } = this.state;

    const {
      wrapper, fieldSet, legend, signText, inputStyle,
    } = styles;

    return (
      <View style={wrapper}>
        <Text style={signText}>{signInOrError}</Text>
        <View style={fieldSet}>
          <Text style={legend}>Email</Text>
          <TextInput
            style={inputStyle}
            value={username}
            onChangeText={(text) => this.setState({ username: text })}
            onSubmitEditing={(text) => this.setState({ username: text })}
            autoCapitalize="none"
            enablesReturnKeyAutomatically
          />
        </View>
        <View style={fieldSet}>
          <Text style={legend}>Password</Text>
          <TextInput
            style={inputStyle}
            value={password}
            onChangeText={(text) => this.setState({ password: text })}
            secureTextEntry
            onSubmitEditing={(event) => this.setState({ password: event.nativeEvent.text }, this.loginUser)}
            autoCapitalize="none"
            enablesReturnKeyAutomatically
          />
        </View>
        {isConnecting ? <ActivityIndicator />
          : <Button
          title="Login"
          accessibilityLabel="Log in"
          onPress={this.loginUser}
          disabled={isConnecting}
        />}
      </View>
    );
  }
}

export default Login;
