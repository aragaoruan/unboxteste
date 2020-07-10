import React, { useState, useEffect } from 'react';
import api from '~/services/api';

import {
  Container,
  ContainerDescription,
  Image,
  Description,
  HorizontalList,
} from './styles';

import { Props, IMovies, ResponseMovies } from './intefaces';

const SeriesItem: React.FC<Props> = ({ id, handle }) => {
  const [movies, setMovies] = useState<IMovies[]>([]);

  useEffect(() => {
    api
      .get<ResponseMovies>(
        `discover/tv?with_genres=${id}&api_key=dcabe3d98146057d837088eb8533a2cb&language=pt-BR`,
      )
      .then((response) => {
        setMovies(response.data.results);
      });
  }, [id]);
  return (
    <HorizontalList>
      {movies.map((movie) => (
        <Container
          key={movie.id}
          onPress={() => handle(movie.id, movie.original_name)}
        >
          <Image
            source={{
              uri: `http://image.tmdb.org/t/p/w185${movie.poster_path}`,
            }}
          />
          <ContainerDescription>
            <Description>{movie.original_name}</Description>
            {/* <Icon name="info" size={12} color="#fff" /> */}
          </ContainerDescription>
        </Container>
      ))}
    </HorizontalList>
  );
};

export default SeriesItem;
