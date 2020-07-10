import React, { useState, useEffect } from 'react';
import api from '~/services/api';

import MovieItem from './MovieItem';
import { Container, View, GenreLabel } from './styles';

import { Igenre, ResponseGenre } from './intefaces';

const HomeMovies: React.FC = () => {
  const [genres, setGenres] = useState<Igenre[]>([]);

  useEffect(() => {
    api
      .get<ResponseGenre>(
        'genre/movie/list?api_key=9c8e34c8a854e5aed01144d9bc41211d&language=pt-BR',
      )
      .then((response) => {
        setGenres(response.data.genres);
      });
  }, []);

  return (
    <Container>
      {genres.map((genre) => (
        <View key={genre.id}>
          <GenreLabel>{genre.name}</GenreLabel>
          <MovieItem id={genre.id} />
        </View>
      ))}
    </Container>
  );
};

export default HomeMovies;
