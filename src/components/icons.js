// src/utils/icons.js
import * as Font from 'expo-font';
import { Platform } from 'react-native';

export const loadFontAwesome = async () => {
  if (Platform.OS !== 'web') return true;

  try {
    await Font.loadAsync({
      FontAwesome: require('../../assets/fonts/FontAwesome.ttf'),
    });
    return true;
  } catch (err) {
    console.log('❌ Error cargando FontAwesome:', err);
    return false;
  }
};

export const loadIonicons = async () => {
  if (Platform.OS !== 'web') return true;

  try {
    await Font.loadAsync({
      Ionicons: require('../../assets/fonts/Ionicons.ttf'),
    });
    return true;
  } catch (err) {
    console.log('❌ Error cargando Ionicons:', err);
    return false;
  }
};
