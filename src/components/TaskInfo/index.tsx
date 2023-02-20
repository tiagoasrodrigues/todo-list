import { View, Text } from 'react-native';

import { styles } from "./styles";

export function TaskInfo() {
  let taskCreated = 5
  let taskConcluded = 2

  return (
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
  )
}