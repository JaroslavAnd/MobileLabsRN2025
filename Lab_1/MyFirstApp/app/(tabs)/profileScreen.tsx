import React, { useState } from 'react';
import { View, TextInput, Text, Button, Image, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    if (password === confirmPassword) {
      console.log('Реєстрація успішна:', { name, email, password });
    } else {
      alert('Паролі не співпадають');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Форма реєстрації</Text>
      
      <Text style={styles.label}>Ім'я</Text>
      <TextInput
        style={styles.input}
        placeholder="Ім'я"
        value={name}
        onChangeText={setName}
      />
      
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      <Text style={styles.label}>Пароль</Text>
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <Text style={styles.label}>Підтвердьте пароль</Text>
      <TextInput
        style={styles.input}
        placeholder="Підтвердьте пароль"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      
      <Button title="Зареєструватися" onPress={handleSubmit} />
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>Андрієвський Ярослав Іванович, ІПЗ-23-5</Text>
        <Text style={styles.footerText}>firstMobileApp</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20, 
    backgroundColor: '#fff' 
  },
  header: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  label: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    alignSelf: 'flex-start', 
    marginLeft: 10, 
    marginBottom: 5
  },
  input: { 
    width: '100%', 
    height: 50, 
    borderColor: '#ccc', 
    borderWidth: 1, 
    borderRadius: 5, 
    paddingHorizontal: 10, 
    marginBottom: 15 
  },
  footer: {
    position: 'absolute', 
    bottom: 20, 
    width: '100%', 
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10
  }
});
