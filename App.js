import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Inicio from './src/screens/Inicio';

import { FontAwesome, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

// Carga las fuentes para web
FontAwesome.loadFont();
MaterialCommunityIcons.loadFont();
Ionicons.loadFont();

export default function App() {
  return (
    <View style={styles.container}>
      <Inicio />  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
