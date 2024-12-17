import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function GainWeightHomeScreen({}) {

  return (
    <View style={styles.container}>

      <Text style={styles.title}>What brings you to FitHealth?</Text>
      <Text style={styles.subtitle}>Select your goals</Text>

      {/* <ScrollView contentContainerStyle={styles.gridContainer}>
        <View style={styles.row}>
          <GoalCard title="Lose Weight" icon={require('../../assets/weight-loss.jpg')} onPress={() => navigation.navigate('LoseWeightScreen')}/>
          <GoalCard title="Gain Strength" icon={require('../../assets/gain-strength.png')} onPress={() => navigation.navigate('GainStrengthScreen')} />
        </View>
        <View style={styles.row}>
          <GoalCard title="Get Flexible" icon={require('../../assets/flexible.png')} onPress={() => navigation.navigate('GetFlexibleScreen')} />
          <GoalCard title="Meditation" icon={require('../../assets/meditation.png')} onPress={() => navigation.navigate('MeditationScreen')} />
        </View>
        <View style={styles.row}>
          <GoalCard title="Sleep Well" icon={require('../../assets/sleep.jpg')} onPress={() => navigation.navigate('SleepWellScreen')} />
          <GoalCard title="Gain Weight" icon={require('../../assets/gain_weight.png')} onPress={() => navigation.navigate('GainWeightScreen')} />
        </View>
      </ScrollView> */}
    </View>
  );
}

// function GoalCard({ title, icon, onPress }) {
//   return (
//     <TouchableOpacity style={styles.card} onPress={() => {
//       console.log(`${title} card pressed`);
//       onPress();
//     }}>
//       <Image source={icon} style={styles.icon} />
//       <Text style={styles.cardText}>{title}</Text>
//     </TouchableOpacity>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
  },
  backText: {
    fontSize: 18,
  },
  skipText: {
    fontSize: 16,
    color: 'gray',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
  gridContainer: {
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '48%',
    height: 120,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  cardText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  proceedButton: {
    backgroundColor: '#FF5733',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 30,
  },
  proceedText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
