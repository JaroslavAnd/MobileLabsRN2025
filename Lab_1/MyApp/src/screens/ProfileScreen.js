import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Реєстрація</Text>
      <Text style={styles.label}>Електронна пошта:</Text>
      <TextInput placeholder="Електронна пошта" style={styles.input} />
      <Text style={styles.label}>Пароль:</Text>
      <TextInput placeholder="Пароль" secureTextEntry style={styles.input} />
      <Text style={styles.label}>Підтвердження пароля:</Text>
      <TextInput placeholder="Пароль (ще раз)" secureTextEntry style={styles.input} />
      <Text style={styles.label}>Прізвище:</Text>
      <TextInput placeholder="Прізвище" style={styles.input} />
      <Text style={styles.label}>Ім'я:</Text>
      <TextInput placeholder="Ім'я" style={styles.input} />
      <View style={styles.buttonContainer}>
        <Button title="Зареєструватися" color="#007bff" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff', flexGrow: 1, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 20,
  },

});
