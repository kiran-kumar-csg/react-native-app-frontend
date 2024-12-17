import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LogWorkoutScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Log Workout Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LogWorkoutScreen;
