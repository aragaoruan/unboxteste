import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation, DrawerActions } from '@react-navigation/native';

import { Container } from './styles';

const OpenDrawer: React.FC = () => {
  const { dispatch } = useNavigation();

  function toggleDrawer(): void {
    dispatch(DrawerActions.toggleDrawer());
  }

  return (
    <Container onPress={toggleDrawer}>
      <Icon name="menu" size={40} color="#000" />
    </Container>
  );
};

export default OpenDrawer;
