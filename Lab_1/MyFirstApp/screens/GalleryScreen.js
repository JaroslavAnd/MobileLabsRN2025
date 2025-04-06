import React from 'react';
import { View, Image, FlatList, StyleSheet } from 'react-native';

const images = [
  { id: '1', uri: 'https://source.unsplash.com/random/200x200?sig=1' },
  { id: '2', uri: 'https://source.unsplash.com/random/200x200?sig=2' },
  { id: '3', uri: 'https://source.unsplash.com/random/200x200?sig=3' },
];

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => <Image source={{ uri: item.uri }} style={styles.image} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  image: { width: '48%', height: 150, margin: '1%' },
});
