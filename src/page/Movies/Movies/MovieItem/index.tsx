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

const MovieItem: React.FC<Props> = ({ id, handle }) => {
  const [movies, setMovies] = useState<IMovies[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .get<ResponseMovies>(
        `discover/movie?with_genres=${id}&api_key=dcabe3d98146057d837088eb8533a2cb&language=pt-BR`,
      )
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
        <Container key={movie.id} onPress={() => handle(movie.id, movie.title)}>
          <Image
            source={{
              uri: `http://image.tmdb.org/t/p/w185${movie.poster_path}`,
            }}
          />
          <ContainerDescription>
            <Description>{movie.title}</Description>
            {/* <Icon name="info" size={12} color="#fff" /> */}
          </ContainerDescription>
        </Container>
      ))}
    </HorizontalList>
  );
};

export default MovieItem;
