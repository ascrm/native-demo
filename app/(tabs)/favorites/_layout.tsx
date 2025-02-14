import { defaultStyle } from "@/constants";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function FavoritesScreenLayout() {
  return (
    <Stack>
        <Stack.Screen name="index" options={{
        title: "Favorites",
          headerShown: false
        }}></Stack.Screen>
    </Stack>
  );
}