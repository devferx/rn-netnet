import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {movieDBApi} from '../api/movieDB';
import {Category} from '../components/CategoryMovie';
import {Hero} from '../components/Hero';
import {Movie, TvShow} from '../interfaces/movieDb';

export const HomeScreen = () => {
  const [popularMovies, setpopularMovies] = useState<Movie[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [popularTvShows, setPopularTvShows] = useState<TvShow[]>([]);

  useEffect(() => {
    movieDBApi.getPopular().then(res => {
      setpopularMovies(res.results);
    });

    movieDBApi.getUpcoming().then(res => {
      setUpcomingMovies(res.results);
    });

    movieDBApi.getTopRated().then(res => {
      setTopRatedMovies(res.results);
    });

    movieDBApi.getPopularTvShows().then(res => {
      setPopularTvShows(res.results);
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Hero movie={popularMovies[0]} />
      <Category title="Recomendaciones" items={popularTvShows} />
      <Category title="Populares en NetNet" items={popularMovies} />
      <Category title="Aclamados por la critica" items={topRatedMovies} />
      <Category title="Proximamente en Netnet" items={upcomingMovies} />
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
