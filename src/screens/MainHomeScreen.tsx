import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MainHomeScreen: React.FC = ({navigation}: any) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    {/* <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.hamburger}> */}
      {/* <Ionicons name="menu" size={30} color="#000" /> */}
    {/* </TouchableOpacity> */}
    <Text>Welcome to Main Home Screen</Text>
  </View>
);

export default MainHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  hamburger: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
});
