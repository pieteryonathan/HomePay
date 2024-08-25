import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Modules/SplashScreenView';
import ChooseRoleScreen from './Modules/ChooseRoleScreenView';
import ChooseSignUpScreen from './Modules/ChooseSignUpScreenView';
import SignUpScreen from './Modules/SignUpScreenView';
import { View, StyleSheet, Text } from 'react-native';
import SignInScreen from './Modules/SignInScreenView';
import HomeownerDashboardScreen from './Modules/HomeownerDashboardScreenView';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { useFonts } from 'expo-font';
import DesignerDashboardScreen from './Modules/DesignerDashboardScreenView';
import ProjectDetailsScreen from './Modules/ProjectDetailsScreenView';
import SettingScreen from './Modules/SettingScreenView';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function HomeownerTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let label;

          if (route.name === 'Dashboard') {
            iconName = 'space-dashboard';
            label = 'Dashboard';
          } else if (route.name === 'Projects') {
            iconName = 'folder-open';
            label = 'Projects';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
            label = 'Settings';
          }

          return (
            <View
              style={{
                alignItems: 'center',
              }}
            >
              <View
                style={[
                  styles.iconContainer,
                  focused && styles.iconContainerFocused,
                ]}
              >
                <Icon name={iconName} size={size} color={color} />
              </View>
              <Text
                style={[
                  styles.label,
                  focused && styles.labelFocused,
                ]}
              >
                {label}
              </Text>
            </View>
          );
        },
        tabBarActiveTintColor: '#5F5F5F',
        tabBarInactiveTintColor: '#5F5F5F',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          height: 96,
        },
        headerShown: false,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Dashboard" component={HomeownerDashboardScreen} />
      <Tab.Screen name="Projects" component={HomeownerDashboardScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}

function DesignerTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let label;

          if (route.name === 'Dashboard') {
            iconName = 'space-dashboard';
            label = 'Dashboard';
          } else if (route.name === 'Reject Requests') {
            iconName = 'dangerous';
            label = 'Reject Requests';
          } else if (route.name === 'All Projects') {
            iconName = 'folder-open';
            label = 'All Projects';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
            label = 'Settings';
          }

          return (
            <View
              style={{
                alignItems: 'center',
              }}
            >
              <View
                style={[
                  styles.iconContainer,
                  focused && styles.iconContainerFocused,
                ]}
              >
                <Icon name={iconName} size={size} color={color} />
              </View>
              <Text
                style={[
                  styles.label,
                  focused && styles.labelFocused,
                ]}
              >
                {label}
              </Text>
            </View>
          );
        },
        tabBarActiveTintColor: '#5F5F5F',
        tabBarInactiveTintColor: '#5F5F5F',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          height: 96,
        },
        headerShown: false,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Dashboard" component={DesignerDashboardScreen} />
      <Tab.Screen name="Reject Requests" component={DesignerDashboardScreen} />
      <Tab.Screen name="All Projects" component={DesignerDashboardScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}

function MainStack() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ChooseRole" component={ChooseRoleScreen} />
        <Stack.Screen name="ChooseSignUp" component={ChooseSignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="HomeownerDashboard" component={HomeownerDashboardScreen} />
        <Stack.Screen name="DesignerDashboard" component={DesignerDashboardScreen} />
        <Stack.Screen name="ProjectDetails" component={ProjectDetailsScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="HomeownerTabs" component={HomeownerTabs} options={{ headerShown: false }} />
        <Stack.Screen name="DesignerTabs" component={DesignerTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
  );
}

export default function App() {
  const [isShowSplash, setIsShowSplash] = React.useState(true);
  const [fontsLoaded] = useFonts({
    'EuclidCircularA-Bold': require('./assets/fonts/EuclidCircularABold.ttf'),
    'EuclidCircularA-SemiBold': require('./assets/fonts/EuclidCircularASemiBold.ttf'),
    'EuclidCircularA-Medium': require('./assets/fonts/EuclidCircularAMedium.ttf'),
  });

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
    <NavigationContainer >
      <MainStack />
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#fff', 
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    marginBottom: 4,
  },
  iconContainerFocused: {
    backgroundColor: '#EEF5FF',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width:56,
    height: 32,
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    fontFamily: 'EuclidCircularA-Medium',
    textAlign: 'center', 
    overflow: 'hidden', 
    width: 80,
  },
  labelFocused: {
    fontSize: 12,
    fontFamily: 'EuclidCircularA-Bold',
    textAlign: 'center',
    overflow: 'hidden',
    width: 80,
  },
});