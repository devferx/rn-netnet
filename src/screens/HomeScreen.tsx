import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import {movieDBApi} from '../api/movieDB';
import {Category} from '../components/Category';
import {Hero} from '../components/Hero';
import {TvShow} from '../interfaces/movieDb';
import {useGetMovies} from '../hooks/useGetMovies';

export const HomeScreen = () => {
  const {movies: popularMovies, getNextPage: getNextPagePopularMovies} =
    useGetMovies('/popular');
  const {movies: topRatedMovies, getNextPage: getNextPageTopRatedMovies} =
    useGetMovies('/top_rated');
  const {movies: upcomingMovies, getNextPage: getNextPageUpcomingMovies} =
    useGetMovies('/upcoming');

  const [popularTvShows, setPopularTvShows] = useState<TvShow[]>([]);

  useEffect(() => {
    movieDBApi.getPopularTvShows().then(res => {
      setPopularTvShows(res.results);
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Hero movie={popularMovies[0]} />
      <Category title="Recomendaciones" items={popularTvShows} />
      <Category
        title="Populares en NetNet"
        items={popularMovies}
        getNextPage={getNextPagePopularMovies}
      />
      <Category
        title="Aclamados por la critica"
        items={topRatedMovies}
        getNextPage={getNextPageTopRatedMovies}
      />
      <Category
        title="Proximamente en Netnet"
        items={upcomingMovies}
        getNextPage={getNextPageUpcomingMovies}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },
  title: {
    color: 'white',
    fontSize: 32,
    marginLeft: 16,
  },
});
