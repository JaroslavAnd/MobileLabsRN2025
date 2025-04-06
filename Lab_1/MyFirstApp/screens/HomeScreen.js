import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const news = [
  { id: '1', title: 'Новина 1: Важливі події сьогодні' },
  { id: '2', title: 'Новина 2: React Native стає популярнішим' },
  { id: '3', title: 'Новина 3: Оновлення Expo' },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Останні новини</Text>
      <FlatList
        data={news}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.newsItem}>{item.title}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  newsItem: { fontSize: 18, padding: 10, borderBottomWidth: 1, borderColor: '#ddd' },
});
