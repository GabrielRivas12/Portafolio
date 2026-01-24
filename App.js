import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import Inicio from './src/screens/Inicio';
import { useState, useEffect } from 'react';

import { loadFontAwesome, loadIonicons } from './src/components/icons';

export default function App() {
  const [fontAwesomeLoaded, setFontAwesomeLoaded] = useState(false);
  const [ioniconsLoaded, setIoniconsLoaded] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        // ✅ Cargar UNA por UNA (secuencial)
        const faOk = await loadFontAwesome();
        setFontAwesomeLoaded(faOk);

        const ioOk = await loadIonicons();
        setIoniconsLoaded(ioOk);

        setReady(true);
      } catch (err) {
        console.error('❌ Error general cargando fuentes:', err);
        setReady(true); // para que no se quede cargando infinito
      }
    };

    loadFonts();
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
      <Inicio
        fontAwesomeLoaded={fontAwesomeLoaded}
        ioniconsLoaded={ioniconsLoaded}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
