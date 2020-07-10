import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import api from '~/services/api';

import Loading from '~/components/Loading';
import MovieItem from './MovieItem';
import { Container, View, GenreLabel } from './styles';

import { Igenre, ResponseGenre } from './intefaces';

const HomeMovies: React.FC = () => {
  const { navigate } = useNavigation();
  const [genres, setGenres] = useState<Igenre[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .get<ResponseGenre>(
        'genre/movie/list?api_key=9c8e34c8a854e5aed01144d9bc41211d&language=pt-BR',
      )
      .then((response) => {
        setGenres(response.data.genres);
        setLoading(false);
      });
  }, []);

  const handleDetails = useCallback(
    (id: number, title: string) => {
      navigate('DetailsMovie', { id, title });
    },
    [navigate],
  );

  if (loading) {
    return <Loading />;
  }
  return (
    <Container>
      {genres.map((genre) => (
        <View key={genre.id}>
          <GenreLabel>{genre.name}</GenreLabel>
          <MovieItem id={genre.id} handle={handleDetails} />
        </View>
      ))}
    </Container>
  );
};

export default HomeMovies;
