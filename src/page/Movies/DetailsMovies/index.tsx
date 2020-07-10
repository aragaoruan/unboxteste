import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import api from '~/services/api';

import Loading from '~/components/Loading';
import {
  Container,
  ImageBackdrop,
  Title,
  ViewInfo,
  TextInfo,
  TextGenres,
  Text,
  ViewAverage,
  ContainerTitle,
  Average,
  Point,
  TextCompanies,
  ProductionCompanies,
  TabItem,
  ImageCompanies,
} from './styles';

import { IDetailsMovie, RouteParams } from './interfaces';

const DetailsMovies: React.FC = () => {
  const route = useRoute();
  const { id } = route.params as RouteParams;
  const [movie, setMovie] = useState<IDetailsMovie>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .get<IDetailsMovie>(
        `/movie/${id}?api_key=9c8e34c8a854e5aed01144d9bc41211d&language=pt-BR`,
      )
      .then((response) => {
        setMovie(response.data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <ImageBackdrop
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`,
        }}
      />

      <ContainerTitle>
        <Title>{movie?.title}</Title>

        <ViewAverage>
          <Average>{movie?.vote_average}</Average>
          <Point>/10</Point>
        </ViewAverage>
      </ContainerTitle>

      <ViewInfo>
        <TextInfo>{movie?.runtime} min </TextInfo>

        {movie?.genres?.map((genre) => (
          <TextGenres key={genre.id}>{genre?.name} </TextGenres>
        ))}
      </ViewInfo>
      <Text>{movie?.overview}</Text>

      <Title>Linguas</Title>
      {movie?.spoken_languages.map((language) => (
        <Text key={language?.iso_639_1}>{language?.name}</Text>
      ))}

      <Title>Empresas de produção</Title>
      <ProductionCompanies>
        {movie?.production_companies?.map((companie) => (
          <TabItem key={companie.id}>
            <ImageCompanies
              source={{
                uri: `https://image.tmdb.org/t/p/w500${companie.logo_path}`,
              }}
            />
            <TextCompanies>{companie.name}</TextCompanies>
          </TabItem>
        ))}
      </ProductionCompanies>

      <Title>Países de produção</Title>
      {movie?.production_countries.map((countrie) => (
        <Text key={countrie?.iso_3166_1}>{countrie?.name}</Text>
      ))}
    </Container>
  );
};

export default DetailsMovies;
