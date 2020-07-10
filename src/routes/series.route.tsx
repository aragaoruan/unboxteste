import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { View } from 'react-native';
import OpenDrawer from '~/components/OpenDrawer';
import Goback from '~/components/Goback';

import Series from '~/page/Series/Series';
import Trending from '~/page/Series/Trending';
import SearchSeries from '~/page/Series/SearchSeries';

import DetailsSeries from '~/page/Series/DetailsSeries';

interface Props {
  title?: string;
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs: React.FC = () => {
  return (
    <Tab.Navigator>
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
      <Tab.Screen
        name="SearchSeries"
        component={SearchSeries}
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
        name="Series"
        component={Series}
        options={{
          title: 'Series',
          tabBarIcon: ({ color }) => (
            <View>
              <Icon name="local-movies" size={20} color={color} />
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
        headerTitle: 'Series',
      }}
    >
      <Stack.Screen
        name="Tabs"
        options={{
          headerLeft: () => <OpenDrawer />,
        }}
        component={Tabs}
      />
      <Stack.Screen
        name="DetailsSeries"
        component={DetailsSeries}
        options={({ route }) => {
          const { title } = route.params as Props;
          return {
            headerTitle: title || '',
            headerLeft: () => <Goback />,
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default stack;
