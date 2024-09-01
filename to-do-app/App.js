import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Logo from './assets/rocket.png'; // Importe o arquivo PNG
import Header from './components/header';


export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Header />
    </>
  );
}


