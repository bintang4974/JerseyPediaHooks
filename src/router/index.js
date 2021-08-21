import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Home, ListJersey, Profile, Splash } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Jersey" component={ListJersey} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Splash"
                component={Splash}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="MainApp"
                component={MainApp}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
