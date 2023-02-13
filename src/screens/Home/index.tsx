import { View } from "react-native";
import { Task } from "../../components/Task";

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Task />
    </View>
  )
} 