import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import Header from './components/header';
import EmptyArea from './components/EmptyArea';
// import CheckBox from './components/Checkbox';
import plusIcon from './assets/plus.png'
import Icon from 'react-native-vector-icons/Ionicons'; // Importa o ícone

export default function App() {

  const [taskList, setTaskList] = useState([])
  const [taskText, setTaskText] = useState('')
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log(taskList)
  }, [taskList])
  

  function addTaskToList() {
    var taskItem = {
      id: counter,
      text: taskText,
      isChecked: false
    }
    setTaskList([...taskList, taskItem])
    setTaskText('')
    setCounter(counter + 1)
  }

  function handleClickCheckbox(taskItem) {

    setTaskList((prevList) =>
      prevList.map((task) =>
        task.id === taskItem.id ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  }

  function CustomCheckbox(taskItem) {
    taskItem = taskItem['taskItem']
    return (
      <TouchableOpacity style={styles.checkboxContainer} onPress={() => handleClickCheckbox(taskItem)}>
        <View style={[styles.checkbox, taskItem.isChecked && styles.checked]}>
          {taskItem.isChecked && <Icon name="checkmark" size={20} color="#fff" />}
        </View>
      </TouchableOpacity>
    )
  }

  function listItem(taskItem, index) {
    const labelStyle = taskItem.isChecked ? styles.checkboxLabelChecked : styles.checkboxLabelUnchecked;

    return (
      <View key={index} style={styles.listItemContainer}>
        <CustomCheckbox taskItem={taskItem} />
        <Text style={labelStyle}>{taskItem.text}</Text>
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
                  taskList.map((task, index) => {
                    return listItem(task, index)
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
    flexDirection: 'row',
    alignItems: 'center',
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
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#4EA8DE', // Cor do checkbox quando marcado
    borderColor: '#4EA8DE',
  },
  checkboxLabelChecked: {
    fontSize: 16,
    color: '#808080',
    textDecorationLine: 'line-through'
  },
  checkboxLabelUnchecked: {
    fontSize: 16,
    color: 'white',
  },
})

