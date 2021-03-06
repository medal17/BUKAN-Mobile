import { View, Text, Pressable } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

export default function Chapterchip(props) {
  return (
    
    <Pressable onPress={()=>props.navigation.navigate('login',{state:props.name})} style={[tw`border rounded-full m-2 px-3 py-1`, {borderColor:'#0092ED'}]}>
      <Text style={tw`text-gray-700`}>{props.name}</Text>
    </Pressable>
  )
}