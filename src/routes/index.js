import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../views/Main';
import Cinemas from '../views/Cinemas';
import Upcoming from '../views/Upcoming';

const Stack = createStackNavigator();
const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Main"
        >
            <Stack.Screen
                name="Main"
                component={Main}
                options={{ title: 'Home' }}
            />
            <Stack.Screen
                name="Cinemas"
                component={Cinemas}
                options={{ title: 'Cinemas' }}
            />
            <Stack.Screen
                name="Upcoming"
                component={Upcoming}
                options={{ title: 'Upcoming' }}
            />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;
