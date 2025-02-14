/** @format */

import { Tabs } from 'expo-router'
import { FontAwesome, MaterialCommunityIcons, Ionicons, FontAwesome6 } from '@expo/vector-icons'
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
          paddingTop: 5,
        },
        tabBarStyle: {
          position: 'absolute',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: 'red',
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: '主页',
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={16} color={color}></FontAwesome>,
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="recommend"
        options={{
          title: '推荐',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="playlist-play" size={20} color={color}></MaterialCommunityIcons>,
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="order"
        options={{
          title: '订单',
          tabBarIcon: ({ color }) => <Ionicons name="cart" size={20} color={color}></Ionicons>,
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="user"
        options={{
          title: '我的',
          tabBarIcon: ({ color }) => <FontAwesome6 name="users-line" size={20} color={color}></FontAwesome6>,
        }}
      ></Tabs.Screen>
    </Tabs>
  )
}
