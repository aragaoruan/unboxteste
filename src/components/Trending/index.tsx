import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import api from '~/services/api';

import {
  Container,
  Item,
  Left,
  Poster,
  Description,
  Name,
  DescriptionName,
} from './styles';

import { IResponseTrending } from './intefaces';

const Trending: React.FC<IResponseTrending> = ({ results, handleDetails }) => {
  return (
    <Container>
      {results.map((movie) => (
        <Item
          key={movie?.id}
          onPress={() => handle(movie?.id, movie?.original_name)}
        >
          <Left>
            <Poster
              source={{
                uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
              }}
            />
          </Left>

          <Description>
            <Name>{movie?.original_name}</Name>
            <DescriptionName>{movie?.overview}</DescriptionName>
          </Description>
        </Item>
      ))}
    </Container>
  );
};

export default Trending;
