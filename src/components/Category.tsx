import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import {ItemCard} from './ItemCard';
import {Loading} from './Loading';
import {Movie, TvShow} from '../interfaces/movieDb';

interface CategoryProps {
  title: string;
  items: Array<Movie | TvShow>;
  getNextPage?: () => void;
}

export const Category = ({
  title,
  items,
  getNextPage = () => {},
}: CategoryProps) => {
  if (items.length === 0) {
    return <Loading style={styles.loadingContainer} />;
  }

  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        style={styles.listContainer}
        data={items}
        horizontal
        keyExtractor={({id}) => id.toString()}
        showsHorizontalScrollIndicator={false}
        onEndReached={getNextPage}
        renderItem={({item, index}) => (
          // eslint-disable-next-line react-native/no-inline-styles
          <>
            <ItemCard movie={item} style={{marginLeft: index === 0 ? 16 : 0}} />
            {index === items.length - 1 && (
              <Loading style={styles.loadingContainer} />
            )}
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    height: 300,
    minWidth: 200,
  },
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
