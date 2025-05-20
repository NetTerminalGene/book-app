import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="home" options={{ title: 'Home'}} />
      <Stack.Screen name="library" options={{title: 'Library'}} />
      <Stack.Screen name="search" options={{title: 'Search'}} />
      <Stack.Screen name="profile" options={{title: 'Profile'}} />


    </Stack>
  );
}
