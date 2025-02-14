import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <RootNavigation />
      <StatusBar barStyle={'dark-content'} />
    </SafeAreaProvider>
  )
}


const RootNavigation=()=> {
  return (
    <Stack>
      <Stack.Screen name="(tabs)"  options={{ headerShown: false }}></Stack.Screen>
    </Stack>
  )
}