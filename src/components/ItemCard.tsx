import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import type {ViewStyle} from 'react-native';

import {Movie, TvShow} from '../interfaces/movieDb';

interface ItemCardProps {
  movie: Movie | TvShow;
  style?: ViewStyle;
}

export const ItemCard = ({movie, style = {}}: ItemCardProps) => {
  return (
    <View
      style={{
        ...styles.cardContainer,
        ...style,
      }}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginRight: 12,
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: 'cover',
  },
});
