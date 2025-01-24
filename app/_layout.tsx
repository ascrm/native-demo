/** @format */

import { View, Text, TextInput, Button, ActivityIndicator, TouchableWithoutFeedback } from 'react-native'
import '../global.css'
import { useState } from 'react'

export default function Layout() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [usernamePlaceHolder, setUsernamePlaceHolder] = useState('账号')
  const [passwordPlaceHolder, setPasswordPlaceHolder] = useState('密码')
  const [loading, setLoading] = useState(false)

  const onPress = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <View className={'flex h-full items-center bg-gray-900'}>
      <View className={'mt-[100px] w-[60%]'}>
        <View>
          <Text className={'mb-[40px] p-[10px] text-center text-[32px] text-white'}>登录</Text>
        </View>

        <TextInput
          className={'my-[10px] rounded-lg bg-gray-600 text-white'}
          placeholder={usernamePlaceHolder}
          placeholderTextColor="#ccc"
          value={username}
          textAlign="center" // 使文本居中
          onChangeText={text => setUsername(text)}
          onFocus={() => setUsernamePlaceHolder('')} // 点击时清空占位符
          onBlur={() => setUsernamePlaceHolder('账号')}
        />
        <TextInput
          className={'my-[10px] rounded-lg bg-gray-600 text-white'}
          placeholder={passwordPlaceHolder}
          placeholderTextColor="#ccc"
          value={password}
          textAlign="center" // 使文本居中
          onChangeText={text => setPassword(text)}
          onFocus={() => setPasswordPlaceHolder('')} // 点击时清空占位符
          onBlur={() => setPasswordPlaceHolder('账号')}
        />

        <TouchableWithoutFeedback onPress={onPress}>
          <View className={'mt-[50px] flex-row justify-center rounded-[3px] bg-[#1e90ff]'}>
            <View className={'relative'}>
              <ActivityIndicator className={'absolute left-[-25px] top-1/2 translate-y-[-50%]'} size="small" color="white" animating={loading} />
              <Text className={'py-[8px] text-white'}>登录</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <View>
          <Text className={'py-[10px] text-[12px] text-white'}>
            已同意阅读
            <Text className={'text-blue-600'}>服务协议</Text>和<Text className={'text-blue-600'}>隐私政策</Text>
          </Text>
        </View>
      </View>
    </View>
  )
}
