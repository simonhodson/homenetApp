import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, TextInput, Button,
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
  const {
    wrapper, fieldSet, legend, signText, inputStyle,
  } = styles;
  

  // Handle user state changes
  function onAuthStateChanged(user) {
    // save token ans navigate
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  function createUser() {
    // Use auth as a user
    // If not a user run create user
    // If skip sign in anonamously
    DataRequestsService.FBLoginUsernamePassword(username, password, (err) => {
      if (err) {
        console.log('HERE IS AN ERROR ' + err)
      }
    })
  }

  const signOut = () => {
    auth().signOut();
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
        <Button
          title="Login"
          accessibilityLabel="Login"
          onPress={createUser}
        />
        <Button
          title="Sign out"
          accessibilityLabel="Login"
          onPress={signOut}
        />
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
