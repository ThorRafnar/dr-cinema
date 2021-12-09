import React from 'react';
import { TouchableOpacity } from "react-native";
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Main from '../views/Main';
import Cinemas from '../views/Cinemas';
import Upcoming from '../views/Upcoming';
import Trailer from '../views/Trailer';
import Movies from '../views/Movies';
import MovieDetail from "../views/MovieDetail";
import {MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import {PRIMARY_LIGHT} from "../constants";
import {selectCinema} from "../actions/CinemaActions";
import toggleModal from "../actions/ModalActions";
import {useDispatch} from "react-redux";


const CinemaStack = createStackNavigator();
const UpcomingStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CinemaStackScreen = () => {
  const dispatch = useDispatch();
  return (
    <CinemaStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
          height: 90,
        },
        headerTintColor: '#fff',
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: '600',
        },
      }}
    >
      <CinemaStack.Screen
        name="Cinemas"
        component={Cinemas}
        options={{ title: 'Cinemas' }}
      />
      <CinemaStack.Screen
        name="Movies"
        component={Movies}
        options={({ route }) => ({
          title: `Movies at ${route.params.cinema.name}`,
          headerRight: () => (
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() => {
                dispatch(selectCinema(route.params.cinema));
                dispatch(toggleModal(true));
              }}
            >
              <MaterialIcons name="info-outline" size={32} color="white" />
            </TouchableOpacity>
          ),
        })}
      />
      <CinemaStack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={({ route }) => ({ title: `${route.params.movie.title}`})}
      />
    </CinemaStack.Navigator>
  );
};

const UpcomingStackScreen = () => {
  return (
    <UpcomingStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
          height: 90,
        },
        headerTintColor: '#fff',
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: '600',
        },
      }}
    >
      <UpcomingStack.Screen
        name="Upcoming Movies"
        component={Upcoming}
        options={{ title: 'Upcoming' }}
      />
      <UpcomingStack.Screen
        name="Trailer"
        component={Trailer}
        options={({ route }) => ({ title: `Trailer - ${route.params.title}`})}
      />
    </UpcomingStack.Navigator>
  );
};

const Routes = function () {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: 'black'
          },
          tabBarActiveTintColor: PRIMARY_LIGHT
        }}
      >
        <Tab.Screen
          name="CinemaTab"
          component={CinemaStackScreen}
          options={{
            tabBarLabel: 'Cinemas',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="popcorn" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Upcoming"
          component={UpcomingStackScreen}
          options={{
            tabBarLabel: 'Upcoming',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="movie-open" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
