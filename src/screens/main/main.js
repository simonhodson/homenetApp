import React, { useState, useEffect } from 'react';
import { View, Text, Button, useWindowDimensions } from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import DataRequestsService from '../../services/DataRequestsService';
import { Header } from '../../components/common';
import PreviewWindow from '../../components/previewWindow';
import HomeIco from '../../assets/nav-icons/nav-home-50.png';

// type Props = {
// }

const Main = ({ route }) => {
  const { wrapper, mainWrap } = styles;
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      if (user === null) return null;
    });
    return subscriber;
  }, []);

  return (
    <View style={[wrapper, { height: windowHeight, width: windowWidth }]}>
      <Header image={HomeIco} title="Home Page" />
      <View style={mainWrap}>
        <PreviewWindow />
      </View>
    </View>
  );
};

export default Main;
