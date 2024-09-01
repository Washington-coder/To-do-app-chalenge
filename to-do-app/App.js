import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Logo from './assets/rocket.png'; // Importe o arquivo PNG


export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image style={styles.logo} source={Logo} />
          <Text style={styles.appTitleBlue}>to</Text>
          <Text style={styles.appTitlePurple}>do</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
  },
  appTitleBlue: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#4EA8DE',
  },
  appTitlePurple: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#5E60CE',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    height: 250,

    backgroundColor: '#0D0D0D'
  },
  logo: {
    resizeMode: 'contain',
    
    marginRight: 10
  }
});
