import 'react-native-url-polyfill/auto';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import HomeScreen from './src/screens/HomeScreen';
import GalleryScreen from './src/screens/GalleryScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { View, Image, Text, StyleSheet } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('./src/assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.appName}>FirstMobileApp</Text>
        </View>

        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
              if (route.name === 'Головна') {
                return <MaterialIcons name="home" size={20} color={color} />;
              } else if (route.name === 'Фотогалерея') {
                return <Ionicons name="image" size={20} color={color} />;
              } else if (route.name === 'Профіль') {
                return <FontAwesome name="user" size={20} color={color} />;
              }
            },
            tabBarLabelStyle: { fontWeight: 'bold' },
            tabBarIndicatorStyle: { backgroundColor: '#007bff' },
            tabBarStyle: { backgroundColor: '#eee' },
            tabBarShowIcon: true,
          })}
        >
          <Tab.Screen name="Головна" component={HomeScreen} />
          <Tab.Screen name="Фотогалерея" component={GalleryScreen} />
          <Tab.Screen name="Профіль" component={ProfileScreen} />
        </Tab.Navigator>

        <Text style={styles.footerText}>
          Андрієвський Ярослав Іванович, ІПЗ-23-5
        </Text>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'space-between', 
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 20,
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 150,
  },
  footerText: {
    textAlign: 'center',
    color: '#555',
    fontSize: 12,
    marginBottom: 20, 
  },
});
