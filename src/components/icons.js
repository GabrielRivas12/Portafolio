import * as Font from 'expo-font';

export const loadFonts = async () => {
  await Font.loadAsync({
    FontAwesome: require('../../assets/fonts/FontAwesome.ttf'),
    MaterialCommunityIcons: require('../../assets/fonts/MaterialCommunityIcons.ttf'),
  });
};
