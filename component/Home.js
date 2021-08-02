import React from 'react';
import {View, Text,} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen(){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Component</Text>
        </View>
    );
}

const Stack = createStackNavigator();

function Home(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='HomeScreen' component={HomeScreen} ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Home;