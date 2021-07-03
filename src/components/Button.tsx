import React from 'react'
import {TouchableOpacity, Text} from 'react-native'

type Props = {
    children: React.ReactText;
    onPress: () => void
}

function Button({children, onPress}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <Text>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

export default Button
