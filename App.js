import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import Inicio from './src/screens/Inicio';

export default function App() {
  // Cargar fuentes de los iconos
  const [fontsLoaded] = useFonts({
    ...FontAwesome.font,
    ...MaterialCommunityIcons.font,
  });

  // Mostrar un loader mientras cargan las fuentes
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
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
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0f172a' },
});
