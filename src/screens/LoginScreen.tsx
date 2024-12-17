import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';

type RootStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  MainHomeScreen: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'LoginScreen'>;

const LoginScreen: React.FC = () => {
  // State hooks for email and password
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const login = (email: string, password: string) => {
    // Example authentication logic
    if (email === 'test@example.com' && password === '123') {
      // navigation.navigate('MainHomeScreen');
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainHome' }]
      });
    } else {
      Alert.alert('Login Failed', 'Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#abb2b9"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#abb2b9"
        autoCapitalize="none"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => login(email, password)}
      >
        <Text style={styles.submitButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
        <Text style={styles.registerLink}>Don't have an account? Register here</Text>
      </TouchableOpacity>

    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 23,
    paddingHorizontal: 15,
  },
  input: {
    marginVertical: 10,
    height: 40,
    borderColor: '#FF5733',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '80%'
  },
  submitButton: {
    backgroundColor: '#FF5733',
    padding: 10,
    marginVertical: 2,
    alignItems: 'center',
    borderRadius: 5,
    width: '80%'
  },
  submitButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  registerLink: {
    color: '#FF5733',
    marginTop: 6,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
});
