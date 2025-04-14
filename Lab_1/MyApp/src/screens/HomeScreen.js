import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const news = Array(10).fill({
  title: 'Заголовок новини',
  date: 'Дата новини',
  shortText: 'Короткий текст новини',
});

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Новини</Text>
      <FlatList
        data={news}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.newsItem}>
            <Image
              source={require('../assets/news.jpg')} 
              style={styles.newsImage}
            />
            <View style={styles.textBlock}>
              <Text style={styles.newsTitle}>{item.title}</Text>
              <Text style={styles.newsDate}>{item.date}</Text>
              <Text style={styles.newsText}>{item.shortText}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  newsItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  newsImage: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  textBlock: {
    flexShrink: 1,
  },
  newsTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  newsDate: {
    color: '#666',
    fontSize: 12,
    marginBottom: 2,
  },
  newsText: {
    fontSize: 14,
  },
 
});
