import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { View, Text } from 'react-native';
import OpenDrawer from '~/components/OpenDrawer';

import Movies from '~/page/Movies';
import Trending from '~/page/Trending';
import SearchMovie from '~/page/SearchMovie';
import DetailsMovies from '~/page/DetailsMovies';

interface Props {
  title?: string;
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="SearchMovie"
        component={SearchMovie}
        options={{
          title: 'Pesquisar',
          tabBarIcon: ({ color }) => (
            <View>
              <Icon name="search" size={20} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          title: 'Filmes',
          tabBarIcon: ({ color }) => (
            <View>
              <Icon name="local-movies" size={20} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Trending"
        component={Trending}
        options={{
          title: 'Trending',
          tabBarIcon: ({ color }) => (
            <View>
              <Icon name="trending-up" size={20} color={color} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const stack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerLeft: () => <OpenDrawer />,
        headerTitle: 'Filmes',
      }}
    >
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen
        name="DetailsMovie"
        component={DetailsMovies}
        options={({ route }) => {
          const { title } = route.params as Props;
          return {
            headerTitle: title || '',
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default stack;
