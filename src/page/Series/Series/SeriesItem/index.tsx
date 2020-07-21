import React, { useState, useEffect } from 'react';
import api from '~/services/api';

import Loading from '~/components/Loading';
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .get<ResponseMovies>(`discover/tv?with_genres=${id}`)
      .then((response) => {
        setMovies(response.data.results);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loading />;
  }

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
