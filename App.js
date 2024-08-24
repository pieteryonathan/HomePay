import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Modules/SplashScreenView';
import ChooseRoleScreen from './Modules/ChooseRoleScreenView';
import ChooseSignUpScreen from './Modules/ChooseSignUpScreenView';
import SignUpScreen from './Modules/SignUpScreenView';
import { View, StyleSheet } from 'react-native';
import SignInScreen from './Modules/SignInScreenView';
import HomeownerDashboardScreen from './Modules/HomeownerDashboardScreenView';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isShowSplash, setIsShowSplash] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isShowSplash) {
    return (
      <View style={styles.splashContainer}>
        <SplashScreen />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ChooseRole" component={ChooseRoleScreen} />
        <Stack.Screen name="ChooseSignUp" component={ChooseSignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="HomeownerDashboard" component={HomeownerDashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#fff', // Optional: Set a background color for the splash screen
  },
});