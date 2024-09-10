import { StatusBar } from 'expo-status-bar';
import Header from './components/header';
import { TextInput, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import plusIcon from './assets/plus.png'

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Header />
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder='Adicione uma nova tarefa' placeholderTextColor="#8C8C8C" />
          <TouchableOpacity style={styles.addButton}>
            <Image source={plusIcon} />
          </TouchableOpacity>
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
  inputContainer: {
    display: 'flex',
    height: '100px',
    flexDirection: 'row',
    marginHorizontal: 30,
    gap: 5
  },
  input: {
    width: '80%',
    borderRadius: 6,
    marginTop: -30,
    padding: 20,
    backgroundColor: '#333333',
    shadowColor: '#000',
    elevation: 5,
    fontSize: 16,
    color: '#fff'
  },
  addButton: {
    width: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30,
    borderRadius: 6,
    backgroundColor: '#4EA8DE'
  }
})

