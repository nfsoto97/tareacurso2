import React from 'react'
import { View, StyleSheet } from 'react-native'
import Chip from './Chip'
import listgenres from '../lib/categorias.json'


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const Filters = ({ moviesGenres, onPress }) => {
  const genresChip = moviesGenres.map((genre, index) => {
    let color=listgenres[genre]

    return(
      <Chip
        pressable
        onPress={onPress}
        color={color}
        key={`genres-${index}`} value={genre}
      />
    )
  });

  return (
    <View style={styles.container}>
      {genresChip}
    </View>
  );
};

export default Filters;

