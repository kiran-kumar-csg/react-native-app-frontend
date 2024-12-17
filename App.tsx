import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import LoseWeightScreen from './src/screens/LoseWeightScreen';
import GainStrengthScreen from './src/screens/GainStrengthScreen';
import GetFlexibleScreen from './src/screens/GetFlexibleScreen';
import MeditationScreen from './src/screens/MeditationScreen';
import SleepWellScreen from './src/screens/SleepWellScreen';
import GainWeightScreen from './src/screens/GainWeightScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import MainHomeScreen from './src/screens/MainHomeScreen';
import { View } from 'react-native-reanimated/lib/typescript/Animated';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainHomeDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#f0f0f0',
          width: 250,
        },
        drawerLabelStyle: {
          fontSize: 18,
          fontWeight: 'bold',
        },
        drawerActiveTintColor: '#e91e63',
        drawerInactiveTintColor: 'gray',
        drawerActiveBackgroundColor: '#f2f2f2',
      }}
    >
      <Drawer.Screen 
        name="MainHomeScreen" 
        component={MainHomeScreen} 
        options={{
          drawerLabel: 'Home',
          drawerItemStyle: {
            marginVertical: 1,
          },
        }}
      />
      <Drawer.Screen 
        name="ProfileScreen" 
        component={SettingsScreen} 
        options={{ drawerLabel: 'Profile' }}
      />
      <Drawer.Screen 
        name="SettingsScreen" 
        component={SettingsScreen} 
        options={{ drawerLabel: 'Settings' }}
      />
    </Drawer.Navigator>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        {/* Home Screen */}
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{ headerTitle: 'Home Screen' }}
        />

        {/* Login Screen */}
        <Stack.Screen 
          name="LoginScreen" 
          component={LoginScreen} 
          options={{ headerTitle: 'Login' }}
        />

        {/* Register Screen */}
        <Stack.Screen 
          name="RegisterScreen" 
          component={RegisterScreen} 
          options={{ headerTitle: 'Register' }}
        />

        {/* Main Home Screen */}
        <Stack.Screen 
          name="MainHome" 
          component={MainHomeDrawerNavigator} 
          options={{ headerShown: false }}
        />

        {/* Goal Screens */}
        <Stack.Screen 
          name="LoseWeightScreen" 
          component={LoseWeightScreen} 
          options={{ headerTitle: 'Lose Weight' }}
        />
        <Stack.Screen 
          name="GainStrengthScreen" 
          component={GainStrengthScreen} 
          options={{ headerTitle: 'Gain Strength' }}
        />
        <Stack.Screen 
          name="GetFlexibleScreen" 
          component={GetFlexibleScreen} 
          options={{ headerTitle: 'Get Flexible' }}
        />
        <Stack.Screen 
          name="MeditationScreen" 
          component={MeditationScreen} 
          options={{ headerTitle: 'Meditation' }}
        />
        <Stack.Screen 
          name="SleepWellScreen" 
          component={SleepWellScreen} 
          options={{ headerTitle: 'Sleep Well' }}
        />
        <Stack.Screen 
          name="GainWeightScreen" 
          component={GainWeightScreen} 
          options={{ headerTitle: 'Gain Weight' }}
        />

        {/* Settings Screen */}
        <Stack.Screen 
          name="SettingsScreen" 
          component={SettingsScreen} 
          options={{ headerTitle: 'Settings' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 23,
    paddingHorizontal: 15,
  },
});