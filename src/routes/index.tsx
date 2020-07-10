import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Movies from './movies.route';
import Series from './series.route';

const Drawer = createDrawerNavigator();

const Navigator: React.FC = () => {
  return (
    <Drawer.Navigator initialRouteName="Series" drawerType="slide">
      <Drawer.Screen
        name="Movies"
        options={{ title: 'Filmes' }}
        component={Movies}
      />
      <Drawer.Screen
        name="Series"
        options={{ title: 'Series' }}
        component={Series}
      />
    </Drawer.Navigator>
  );
};

export default Navigator;
