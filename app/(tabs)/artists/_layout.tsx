import { defaultStyle } from "@/constants";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function ArtistsScreenLayout() {
  return (
      <Stack>
        <Stack.Screen name="index" options={{
        title: "artists",
        headerShown: false
        }}></Stack.Screen>
      </Stack> 
  );
}