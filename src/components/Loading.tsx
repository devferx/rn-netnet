import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import type {ViewStyle} from 'react-native';

interface LoadingProps {
  color?: string;
  size?: number;
  style?: ViewStyle;
}

export const Loading = ({
  color = '#D22F26',
  size = 32,
  style = {},
}: LoadingProps) => {
  return (
    <View style={{...styles.container, ...style}}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
