import { NavigationContainerProps } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import {Text, View} from 'react-native'
import Button from '../components/Button'
import { NavigateParamList } from '../entities/navigateParamList'
import { userSignIn } from '../firebase/Auth'

type Props = {
  navigation: StackNavigationProp<NavigateParamList, 'Login'>
}

function Login({navigation}: Props) {
    return (
      <View>
        <Text>Hello user</Text> 
        <Button
          // onPress={() => navigation.navigate("Chats")}
          onPress = {() => userSignIn()}
        >
          Login
        </Button>
      </View>
    )
}

export default Login
