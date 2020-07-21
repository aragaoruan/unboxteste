import React, { useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView, Alert, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '~/services/api';

import Loading from '~/components/Loading';
import {
  Container,
  Form,
  Input,
  Submit,
  Item,
  Left,
  Poster,
  Description,
  Name,
  DescriptionName,
} from './styles';

import { ISearch, IResponseSearch } from './interface';

const SearchMovie: React.FC = () => {
  const { navigate } = useNavigation();
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState<ISearch[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback(() => {
    Keyboard.dismiss();

    if (search.length < 3) {
      Alert.alert('Pesquisa deve conter no mínimo 3 caracteres');
      setSearch('');
      return;
    }
    setLoading(true);
    api
      .get<IResponseSearch>(
        `search/movie?query=${search}&include_adult=false&page=1`,
      )
      .then((response) => {
        setMovies(response.data.results);
        setLoading(false);
      });
  }, [search]);

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
      <Form>
        <Input
          autoCapitalize="none"
          autoCorrect
          placeholder="pesquisar..."
          onChangeText={setSearch}
          onSubmitEditing={handleSearch}
          returnKeyType="send"
          value={search}
        />
        <Submit onPress={handleSearch}>
          <Icon name="search" size={22} color="#FFF" />
        </Submit>
      </Form>

      <ScrollView>
        {movies.map((movie) => (
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
      </ScrollView>
    </Container>
  );
};

export default SearchMovie;
