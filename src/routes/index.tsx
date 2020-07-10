import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Movies from '~/page/Movies';
import Trending from '~/page/Trending';
import DetailsMovies from '~/page/DetailsMovies';

interface Props {
  title?: string;
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="Trending" component={Trending} />
    </Tab.Navigator>
  );
};

const stack: React.FC = () => {
  return (
    <Stack.Navigator>
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
