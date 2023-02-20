import { View } from "react-native";

import { CreateButton } from "../../components/CreateButton";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Task } from "../../components/Task";
import { TaskInfo } from "../../components/TaskInfo";

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.form}>
        <Input />

        <CreateButton />
      </View>
      <View style={styles.tasksContainer}>
        <TaskInfo />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />

        {/* <View style={styles.taskEmpty}>
          <Image
            style={styles.taskEmptyIcon}
            source={require('../../../assets/clipboard.png')}
          />
          <Text style={styles.taskEmptyTextTitle}>Você ainda não tem tarefas cadastradas</Text>
          <Text style={styles.taskEmptyTextSubtitle}>Crie tarefas e organize seus itens a fazer</Text>
        </View> */}
      </View>
    </View>
  )
}