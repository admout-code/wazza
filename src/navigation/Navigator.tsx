import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ChatInternal from '../screens/ChatInternal';
import Chats from '../screens/Chats';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import { NavigateParamList } from '../entities/navigateParamList';

function Navigator() {
    const Stack = createStackNavigator<NavigateParamList>();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Chats" component={Chats}/>
                <Stack.Screen name="ChatInternal" component={ChatInternal}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator
