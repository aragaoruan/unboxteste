import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Movies from './movies.route';

const Drawer = createDrawerNavigator();

const Navigator: React.FC = () => {
  return (
    <Drawer.Navigator initialRouteName="Movies" drawerType="slide">
      <Drawer.Screen
        name="Movies"
        options={{ title: 'Filmes' }}
        component={Movies}
      />
      {/* <Drawer.Screen name="MeusDados" component={MeusDados} /> */}
    </Drawer.Navigator>
  );
};

export default Navigator;
