import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const news = [
  {
    id: '1',
    title: 'Важливі події сьогодні',
    date: '2025-04-06',
    description: 'Сьогодні відбуваються важливі події у світі технологій, зокрема нові анонси в сфері AI.',
    image: 'https://source.unsplash.com/random/200x200?tech',
  },
  {
    id: '2',
    title: 'React Native стає популярнішим',
    date: '2025-04-05',
    description: 'Завдяки новим оновленням, React Native тепер дозволяє розробникам створювати ще кращі мобільні додатки.',
    image: 'https://source.unsplash.com/random/200x200?react',
  },
  {
    id: '3',
    title: 'Оновлення Expo: нові можливості',
    date: '2025-04-04',
    description: 'Expo випустило нову версію з підтримкою додаткових API для швидшої розробки.',
    image: 'https://source.unsplash.com/random/200x200?expo',
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Останні новини</Text>
      <FlatList
        data={news}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.newsItem}>
           
            <Text style={styles.topLabel}>Новина:</Text>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.description}>{item.description}</Text>
            
            <Text style={styles.bottomLabel}>Детальніше...</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  newsItem: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  image: { width: '100%', height: 200, borderRadius: 10, marginBottom: 10 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 5 },
  date: { fontSize: 14, color: 'gray', marginBottom: 5 },
  description: { fontSize: 16 },
  topLabel: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#333' },
  bottomLabel: { fontSize: 14, fontWeight: 'bold', marginTop: 10, color: '#007bff' },
});
