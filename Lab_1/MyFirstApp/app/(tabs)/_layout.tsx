import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import HomeScreen from '../../screens/HomeScreen';
import GalleryScreen from '../../screens/GalleryScreen';
import ProfileScreen from '../../screens/ProfileScreen';

const Tab = createMaterialTopTabNavigator();

export default function Layout() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          indicatorStyle: { backgroundColor: '#FF6347' }, 
          style: { backgroundColor: '#fff' }, 
        }}
      >
        <Tab.Screen name="Головна" component={HomeScreen} />
        <Tab.Screen name="Фотогалерея" component={GalleryScreen} />
        <Tab.Screen name="Профіль" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
