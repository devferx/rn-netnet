import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Movie, TvShow} from '../interfaces/movieDb';
import {MovieCard} from './MovieCard';

interface CategoryProps {
  title: string;
  items: Array<Movie | TvShow>;
}

export const Category = ({title, items}: CategoryProps) => {
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        style={styles.listContainer}
        data={items}
        horizontal
        keyExtractor={({id}) => id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          // eslint-disable-next-line react-native/no-inline-styles
          <MovieCard movie={item} style={{marginLeft: index === 0 ? 16 : 0}} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    marginTop: 24,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 16,
  },
  listContainer: {
    marginTop: 12,
  },
});
