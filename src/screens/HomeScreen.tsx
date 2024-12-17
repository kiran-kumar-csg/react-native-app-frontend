import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  HomeScreen: undefined;
  LoginScreen: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;

export default function HomeScreen({ }) {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/sample_logo.png')}
        style={styles.logo}
      />
      
      <Text style={styles.appName}>FSM</Text>
      <Text style={styles.welcomeText}>
        Welcome to Field Survey Management, where your journey to manage and well-being begins now!
      </Text>
      
      <TouchableOpacity
        style={styles.getStartedButton}
        onPress={() => {
          console.log("Button pressed"); 
          navigation.navigate("LoginScreen")
          }
        }>
        <Text style={styles.getStartedText}>GET lSTARTED</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  skipButton: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  skipText: {
    fontSize: 16,
    color: 'gray',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF5733',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: '#abb2b9',
    textAlign: 'center',
    marginVertical: 20,
  },
  getStartedButton: {
    backgroundColor: '#FF5733',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 50,
    position: 'absolute',
    bottom: 50,
  },
  getStartedText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
