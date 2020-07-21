import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import api from '~/services/api';

import Loading from '~/components/Loading';
import TrendingComponent from '~/components/Trending';

import { ITrending, IResponseTrending } from './interfaces';

const Trending: React.FC = () => {
  const { navigate } = useNavigation();
  const [trending, setTrending] = useState<ITrending[]>([]);
  const [loading, setLoading] = useState(false);

  const handleDetails = useCallback(
    (id: number, title: string) => {
      navigate('DetailsSeries', { id, title });
    },
    [navigate],
  );

  useEffect(() => {
    setLoading(true);
    api.get<IResponseTrending>('trending/tv/week').then((response) => {
      setTrending(response.data.results);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <TrendingComponent results={trending} handleDetails={handleDetails} />;
};

export default Trending;
