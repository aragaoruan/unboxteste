import React, { useState, useEffect } from 'react';
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
  const [trending, setTrending] = useState<ITrending[]>([]);

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
          // onPress={() => handleDetails({ id: el?.id, title: el?.title })}
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
