import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import {Movie} from '../interfaces/movieDb';
import {Loading} from './Loading';

interface HeroProps {
  movie: Movie | null | undefined;
}

export const Hero = ({movie}: HeroProps) => {
  const {height} = useWindowDimensions();

  if (!movie) {
    return (
      <Loading
        style={{
          ...styles.loadingContainer,
          height: height * 0.8,
        }}
      />
    );
  }

  return (
    <View style={{...styles.heroContainer, height: height * 0.8}}>
      <LinearGradient
        style={styles.heroGradient}
        colors={['rgba(0,0,0,0)', '#141414']}
        start={{x: 1, y: 0.75}}
        end={{x: 1, y: 0.98}}
      />
      <Image
        style={styles.heroImage}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
        }}
      />
      <View style={styles.heroActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="add" size={32} color="white" />
          <Text style={styles.actionText}>Mi lista</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playButton} activeOpacity={0.9}>
          <Icon name="play" size={24} color="black" />
          <Text style={styles.playButtonText}>Reproducir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="information-circle-outline" size={32} color="white" />
          <Text style={styles.actionText}>Info</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    justifyContent: 'center',
  },
  heroContainer: {
    position: 'relative',
    width: '100%',
  },
  heroGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 2,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    zIndex: 1,
  },
  heroActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 3,
    width: '100%',
    padding: 16,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionText: {
    color: 'white',
  },
  playButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderRadius: 2,
  },
  playButtonText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 4,
  },
});
