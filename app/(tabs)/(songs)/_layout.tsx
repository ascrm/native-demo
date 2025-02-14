import { Stack } from "expo-router";


export default function SongsScreenLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        headerTitle: "songs",
        headerShown: false
      }}></Stack.Screen>
    </Stack>
  );
}