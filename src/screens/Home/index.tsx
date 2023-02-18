import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Task } from "../../components/Task";

import { styles } from './styles';

export function Home() {
  let taskCreated = 5
  let taskConcluded = 2

  function handleTaskAdd() {
    console.log('Add');
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/logo.png')}
        />
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={'#808080'}
          keyboardType="default"
        />

        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <Image
            source={require('../../../assets/plus.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tasksContainer}>
        <View style={styles.textInfo}>
          <View style={styles.tasksInfoContainer}>
            <Text style={styles.tasksCreated}>Criadas</Text>
            <Text style={styles.tasksInfoNumber}>{taskCreated}</Text>
          </View>
          <View style={styles.tasksInfoContainer}>
            <Text style={styles.tasksConcluded}>Concluídas</Text>
            <Text style={styles.tasksInfoNumber}>{taskConcluded}</Text>
          </View>
        </View>
        {/* <View style={styles.taskEmpty}>
          <Image
            style={styles.taskEmptyIcon}
            source={require('../../../assets/clipboard.png')}
          />
          <Text style={styles.taskEmptyTextTitle}>Você ainda não tem tarefas cadastradas</Text>
          <Text style={styles.taskEmptyTextSubtitle}>Crie tarefas e organize seus itens a fazer</Text>
        </View> */}
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </View>
    </View>
  )
}