import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function NewsItem({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10, borderBottomWidth: 1, borderColor: '#ddd' },
  text: { fontSize: 18 },
});
