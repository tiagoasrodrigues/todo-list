import { Text, TextInput, View } from "react-native";
import { Task } from "../../components/Task";

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>todo</Text>
      <TextInput
        style={styles.input}
        placeholder="Descrição da tarefa"
        placeholderTextColor={'#f2f2f2'}
      />
      {/* <Task /> */}
    </View>
  )
} 