import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  CheckBox
} from 'react-native';
import Header from './components/header';
import EmptyArea from './components/EmptyArea';
import plusIcon from './assets/plus.png'

export default function App() {

  const [taskList, setTaskList] = useState([])
  const [taskText, setTaskText] = useState('')

  function addTaskToList() {
    setTaskList([...taskList, taskText])
    setTaskText('')
  }

  function listItem(text) {
    return (
      <View style={styles.listItemContainer}>
        <Text style={{ 'color': 'white' }}>{text}</Text>
      </View>
    )
  }

  return (
    <>
      <StatusBar style="light" />
      <Header />
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput value={taskText} onChangeText={(value) => setTaskText(value)} style={styles.input} placeholder='Adicione uma nova tarefa' placeholderTextColor="#8C8C8C" />
          <TouchableOpacity onPress={addTaskToList} style={styles.addButton}>
            <Image source={plusIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <View style={styles.listContainerHeader}>
            <View style={styles.labelContainer}>
              <Text style={styles.createdTasksLabel}>Criadas</Text>
              <View style={styles.counterContainer}>
                <Text style={{ 'color': 'white' }}>0</Text>
              </View>
            </View>
            <View style={styles.labelContainer}>
              <Text style={styles.doneTasksLabel}>Concluídas</Text>
              <View style={styles.counterContainer}>
                <Text style={{ 'color': 'white' }}>0</Text>
              </View>
            </View>
          </View>
          {
            taskList.length === 0
              ?
              <EmptyArea />
              :
              <ScrollView showsVerticalScrollIndicator={false}>
                {
                  taskList.map((task) => {
                    return listItem(task)
                  })
                }
              </ScrollView>
          }
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
  },
  listContainer: {
    flex: 1,
    marginHorizontal: 30,
  },
  listContainerHeader: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 30
  },
  labelContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10
  },
  createdTasksLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#4EA8DE',
  },
  doneTasksLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#5E60CE',
  },
  counterContainer: {
    maxWidth: 70,
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: '#333333',
    shadowColor: '#000',
    elevation: 5,
  },
  listItemContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    minHeight: 75,
    padding: 12,
    backgroundColor: '#333333',
    shadowColor: '#000',
    elevation: 5,
    marginTop: 10,
    borderRadius: 8,
    gap: 8,
    border: 1
  }
})

