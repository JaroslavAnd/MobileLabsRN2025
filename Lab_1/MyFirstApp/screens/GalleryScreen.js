import React from 'react';
import { View, Image, FlatList, Text, StyleSheet } from 'react-native';

const images = [
  { id: '1', uri: 'https://source.unsplash.com/random/200x200?sig=1' },
  { id: '2', uri: 'https://source.unsplash.com/random/200x200?sig=2' },
  { id: '3', uri: 'https://source.unsplash.com/random/200x200?sig=3' },
];

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Галерея зображень</Text>  {/* Верхній підпис */}
      
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.uri }} style={styles.image} />
          </View>
        )}
      />
      
      <Text style={styles.footer}>
        Андрієвський Ярослав Іванович, ІПЗ-23-5
      </Text> 
      <Text style={styles.footer}>firstMobileApp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  header: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    textAlign: 'center' 
  },
  imageContainer: {
    width: '48%',
    margin: '1%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: { width: '100%', height: 150, borderRadius: 8 },
  footer: {
    fontSize: 14,
    textAlign: 'center',
    color: 'gray',
    marginTop: 10,
  },
  logo: { 
    width: 80, 
    height: 80, 
    alignSelf: 'center', 
    marginTop: 10,
  },
});
