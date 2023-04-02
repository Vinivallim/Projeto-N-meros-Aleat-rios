import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Aleatorio from './src/Aleatório';

export default function App() {
  return (
    <View style={styles.container}>
      <Aleatorio></Aleatorio>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7ac6ff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});
