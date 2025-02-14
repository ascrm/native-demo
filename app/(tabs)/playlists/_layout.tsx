/** @format */

import { defaultStyle } from '@/constants'
import { Stack } from 'expo-router'
import { View } from 'react-native'

export default function PlaylistsScreenLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Playlists',
        }}
      ></Stack.Screen>
    </Stack>
  )
}
