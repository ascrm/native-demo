/** @format */

import { Tabs } from 'expo-router'

export default function TabsNavigation() {
  return (
    <Tabs>
      <Tabs.Screen name="favorites"></Tabs.Screen>
      <Tabs.Screen name="playlists"></Tabs.Screen>
      <Tabs.Screen name="(songs)"></Tabs.Screen>
      <Tabs.Screen name="artists"></Tabs.Screen>
    </Tabs>
  )
}
