import React from 'react';
import { View, StyleSheet, FlatList, Image, Text } from 'react-native';

const image1 = require('../assets/photo-placeholder0.jpg');
const image2 = require('../assets/photo-placeholder1.jpg');
const image3 = require('../assets/photo-placeholder2.jpg');
const image4 = require('../assets/photo-placeholder3.jpg');
const image5 = require('../assets/photo-placeholder4.jpg');

const images = Array(8).fill(0).map((_, index) => {
  const imageIndex = index % 5; 
  switch (imageIndex) {
    case 0:
      return image1;
    case 1:
      return image2;
    case 2:
      return image3;
    case 3:
      return image4;
    case 4:
      return image5;
    default:
      return image1;
  }
});
export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageWrapper}>
            <Image source={item} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  imageWrapper: {
    flex: 1,
    aspectRatio: 1,
    margin: 5,
    backgroundColor: '#eee',
    borderRadius: 4,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
 
});
