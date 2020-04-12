import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, TextInput, Button, ActivityIndicator,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import DataRequestsService from '../../services/DataRequestsService';

// type Props = {
//   styles: Props.object
// }

const Login = () => {
  const signInText = 'Sign In or Create User';
  const [signInOrError, setSignInOrError] = useState(signInText);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [eValue, setEValue] = useState('');
  const [pValue, setPValue] = useState('');
  const [isConnecting, setIsConnecting] = useState(true);
  const {
    wrapper, fieldSet, legend, signText, inputStyle,
  } = styles;


  // Handle user state changes
  function onAuthStateChanged(user) {
    if (user !== null) {
      // Handle user as true
      console.log(user.email);
    }
    reset();
    // save token ans navigate
  }

  function reset() {
    setIsConnecting(false);
    setSignInOrError(signInText);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  function loginUser() {
    setIsConnecting(true);
    auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        // Logged in so Login action ?
        setIsConnecting(false);
      })
      .catch((error) => {
        if (error.code === 'auth/wrong-password') { setSignInOrError('Invalid Password'); }
        if (error.code === 'auth/invalid-email') { setSignInOrError('Invalid Email'); }
        if (error.code === 'auth/user-disabled') { setSignInOrError('This User Account is Disabled'); }
        if (error.code === 'auth/user-not-found') { setSignInOrError('User Not Found'); }
        if (error.code === 'auth/too-many-requests') { console.log('Handle have you forgotten password'); }
        setTimeout(reset, 2000);
      });

    // Use auth as a user
    // If not a user run create user
    // If skip sign in anonamously
  }

  const createUser = () => {
    setIsConnecting(true);
    auth()
      .createUserWithEmailAndPassword(username, password)
      .then(() => {
        // Created and signed in so login ?
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') { setSignInOrError('Email in use,\n Have you forgotten your password ?'); }
        if (error.code === 'auth/invalid-email') { setSignInOrError('Invalid Email'); }
        if (error.code === 'auth/weak-password') { setSignInOrError('Password must be a minmum 6 characterss'); }
        setTimeout(reset, 2000);
      });
  };

  return (
      <View style={wrapper}>
        <Text style={signText}>{signInOrError}</Text>
        <View style={fieldSet}>
          <Text style={legend}>Email</Text>
          <TextInput
            style={inputStyle}
            value={eValue}
            onChangeText={(text) => setEValue(text)}
            onBlur={() => setUsername(eValue)}
            onSubmitEditing={() => setUsername(eValue)}
            autoCapitalize="none"
            enablesReturnKeyAutomatically
          />
        </View>
        <View style={fieldSet}>
          <Text style={legend}>Password</Text>
          <TextInput
            style={inputStyle}
            value={pValue}
            onChangeText={(text) => setPValue(text)}
            secureTextEntry
            onBlur={() => setPassword(pValue)}
            onSubmitEditing={() => setPassword(eValue)}
            autoCapitalize="none"
            enablesReturnKeyAutomatically
          />
        </View>
        {isConnecting ? <ActivityIndicator />
          : <Button
          title="Login"
          accessibilityLabel="Log in"
          onPress={loginUser}
          disabled={isConnecting}
        />}
        <View style={{ paddingVertical: 10 }} />
        {isConnecting ? <ActivityIndicator />
          : <Button
          title="Create User"
          accessibilityLabel="Create User"
          onPress={createUser}
          disabled={isConnecting}
        />}
      </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 150,
    minHeight: '100%',
  },
  signText: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },
  inputStyle: {
    width: '100%',
    height: '100%',
  },
  fieldSet: {
    display: 'flex',
    alignItems: 'center',
    margin: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    height: 40,
    width: 250,
    marginVertical: 20,
  },
  legend: {
    position: 'absolute',
    top: -14,
    left: 10,
    fontWeight: 'bold',
    backgroundColor: '#FFFFFF',
  },
});
