// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import Inicio from './src/screens/Inicio';
import { useState, useEffect } from 'react';

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Si quieres algún preload de assets, se haría aquí
    setReady(true); // para web, solo dejamos listo
  }, []);

  if (!ready) {
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
