import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ 
        headerShown: false, // Remove header, all header control is in (tabs)
        headerLeft: () => <></>, // To prevent having a "back" button from the error page
       }} />
      <Stack.Screen name="about" options={{ title: 'About' }} />
      <Stack.Screen name = "+not-found" options={{ title: 'Error Page'}} />
    </Stack>
  );
}
