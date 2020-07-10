import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import api from '~/services/api';

import TrendingComponent from '~/components/Trending';

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
        'tv/popular?api_key=9c8e34c8a854e5aed01144d9bc41211d&language=pt-BR&page=1',
      )
      .then((response) => {
        setTrending(response.data.results);
      });
  }, []);
  return <TrendingComponent results={trending} handleDetails={handleDetails} />;
};

export default Trending;
