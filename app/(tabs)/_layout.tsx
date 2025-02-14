/** @format */

import { Tabs } from 'expo-router'
import { View } from 'react-native'
import '@/global.css'

export default function TabsNavigation() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: -10,
        },
        tabBarItemStyle: {
          alignContent: 'center',
        },
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}
    >
      <Tabs.Screen name="favorites"></Tabs.Screen>
      <Tabs.Screen name="playlists"></Tabs.Screen>
      <Tabs.Screen name="(songs)"></Tabs.Screen>
      <Tabs.Screen name="artists"></Tabs.Screen>
    </Tabs>
  )
}
