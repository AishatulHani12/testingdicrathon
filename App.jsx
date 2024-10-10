import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Pressable, Text, View, ScrollView, SafeAreaView, VirtualizedList, Alert } from 'react-native';
import Home from './Screens/Home';
import Recommendation from './Screens/Recommendation';


const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Recommendation" component={Recommendation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

