import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../views/Main';
import Cinemas from '../views/Cinemas';
import Upcoming from '../views/Upcoming';
import CinemaDetail from '../views/CinemaDetail';
import Trailer from '../views/Trailer';

const Stack = createStackNavigator();
const Routes = function () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#444',
            height: 80,
          },
          headerTintColor: '#fff',
          headerTransparent: true,
          headerShadowVisible: false,
          headerTitleStyle: {
            fontWeight: '500',
          },
        }}
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
          name="CinemaDetail"
          component={CinemaDetail}
          options={{ title: 'CinemaDetail' }}
        />
        <Stack.Screen
          name="Upcoming"
          component={Upcoming}
          options={{ title: 'Upcoming' }}
        />
        <Stack.Screen
          name="Trailer"
          component={Trailer}
          options={{ title: 'Trailer' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
