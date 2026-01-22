import * as Font from 'expo-font';
import { Platform } from 'react-native';

export const loadFonts = async () => {
  if (Platform.OS === 'web') {
    // Cargar fonts desde assets para web
    await Font.loadAsync({
      FontAwesome: require('../../assets/fonts/FontAwesome.ttf'),
      MaterialCommunityIcons: require('../../assets/fonts/MaterialCommunityIcons.ttf'),
    });
  } else {
    // En móvil no necesitamos cargar nada, ya vienen con vector-icons
    return Promise.resolve();
  }
};
