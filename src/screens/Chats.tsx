import React from 'react'
import {Text, View} from 'react-native'
import Button from '../components/Button'

function Chats() {

  const chats = [{name: "asdasda"}, {name: "asdasda"}, {name: "asdasda"}, {name: "asdasda"}, {name: "asdasda"}, {name: "asdasda"}, {name: "asdasda"}, {name: "asdasda"}, {name: "asdasda"}, {name: "asdasda"}, {name: "asdasda"}, {name: "asdasda"}, {name: "asdasda"}, {name: "asdasda"}, {name: "asdasda"}, ]

  return (
    <View>
      {chats.map((chat) => {
        <Button onPress={() => {}}>{chat.name}</Button>
      })}
    </View>
  )
}

export default Chats
