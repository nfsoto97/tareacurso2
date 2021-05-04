import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import Chip from '../Chip';
import Icon from 'react-native-vector-icons/FontAwesome5'

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});

const GenresList = ({ genres }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <FlatList
      style={styles.container}
      data={genres}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(genre) => { return genre.name }}
      renderItem={({ item: genre}) => <Chip value={genre.name} color={genre.color} />}
    />
  </View>
);

export default GenresList;
