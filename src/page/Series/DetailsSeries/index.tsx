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
  Item,
  Left,
  Poster,
  Description,
  Name,
  DescriptionName,
} from './styles';

import { IDetailsMovie, RouteParams } from './interfaces';

const DetailsSeries: React.FC = () => {
  const route = useRoute();
  const { id } = route.params as RouteParams;
  const [movie, setMovie] = useState<IDetailsMovie>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get<IDetailsMovie>(`/tv/${id}`).then((response) => {
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

      <Title>Temporadas</Title>
      {movie?.seasons.map((season) => (
        <Item key={season?.id}>
          <Left>
            <Poster
              source={{
                uri: `https://image.tmdb.org/t/p/w500${season?.poster_path}`,
              }}
            />
          </Left>

          <Description>
            <Name>{season.name}</Name>
            <DescriptionName>{season?.overview}</DescriptionName>
          </Description>
        </Item>
      ))}
    </Container>
  );
};

export default DetailsSeries;
