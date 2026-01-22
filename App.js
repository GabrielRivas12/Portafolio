import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ActivityIndicator, Platform } from 'react-native';
import Inicio from './src/screens/Inicio';
import { useState, useEffect } from 'react';
import * as Font from 'expo-font';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
  const loadFonts = async () => {
    try {
      if (Platform.OS === 'web') {
        // Carga fonts desde assets en Web
        await Font.loadAsync({
          FontAwesome: require('./assets/fonts/FontAwesome.ttf'),
          MaterialCommunityIcons: require('./assets/fonts/MaterialCommunityIcons.ttf'),
        });
      } else {
        // En móvil no necesitamos cargar nada
        await Promise.resolve();
      }
      setFontsLoaded(true);
    } catch (err) {
      console.error(err);
    }
  };

  loadFonts();
}, []);

  if (!fontsLoaded) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#60a5fa" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Inicio />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
