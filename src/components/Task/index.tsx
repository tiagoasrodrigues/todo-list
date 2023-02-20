import { Text, TouchableOpacity, View } from "react-native";
import { Checkbox } from "../Checkbox";
import { DeleteButton } from "../DeleteButton";

import { styles } from './styles';

export function Task() {
  let task = 'Integer urna interdum massa libero auctor neque turpis turpis semper.'

  function handleTask() {
    console.log('Conclui uma task 💕');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.taskCheckbox} onPress={handleTask}>
        <Checkbox />

        <Text style={styles.taskName}>
          {task}
        </Text>
      </TouchableOpacity>

      <DeleteButton />
    </View>
  )
}