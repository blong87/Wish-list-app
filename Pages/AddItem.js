import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AuthStyle from '../assets/styles/AuthStyle'
import { View, Text } from 'react-native'


export default function AddItem() {
  return (
    <SafeAreaView style={AuthStyle.container}>
        <View>
          <Text>Add Item</Text>
        </View>
    </SafeAreaView>
  )
}
