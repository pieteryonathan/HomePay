import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './SplashScreenView';
import SignUpScreen from './SignUpScreenView';
import { useEffect, useState } from 'react';

export default function App() {
  const[isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 2000);
  });
  return <>{isShowSplash  ? <SplashScreen /> : <SignUpScreen/>}</>;
}