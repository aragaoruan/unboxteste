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

import { ITrending, IResponseTrending } from './intefaces';

const Trending: React.FC = () => {
  const { navigate } = useNavigation();
  const [trending, setTrending] = useState<ITrending[]>([]);

  const handleDetails = useCallback(
    (id: number, title: string) => {
      navigate('DetailsMovie', { id, title });
    },
    [navigate],
  );

  useEffect(() => {
    api
      .get<IResponseTrending>(
        'trending/movie/week?api_key=9c8e34c8a854e5aed01144d9bc41211d&language=pt-BR',
      )
      .then((response) => {
        setTrending(response.data.results);
      });
  }, []);
  return (
    <Container>
      {trending.map((movie) => (
        <Item
          key={movie?.id}
          onPress={() => handleDetails(movie?.id, movie?.title)}
        >
          <Left>
            <Poster
              source={{
                uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
              }}
            />
          </Left>

          <Description>
            <Name>{movie?.title}</Name>
            <DescriptionName>{movie?.overview}</DescriptionName>
          </Description>
        </Item>
      ))}
    </Container>
  );
};

export default Trending;
