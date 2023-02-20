import { Text, TouchableOpacity, View } from "react-native";
import { Checkbox } from "../Checkbox";
import { DeleteButton } from "../DeleteButton";

import { styles } from './styles';

type TaskProps = {
  task: string;
}

const onConcluded = false

function handleTask() {
  console.log('Conclui uma task 💕');
}

export function Task({ task }: TaskProps) {
  return (
    <View style={styles.container}>
      <View style={styles.taskCheckbox}>
        <Checkbox isChecked={false} />

        <Text style={styles.task}>
          {task}
        </Text>
        <DeleteButton />
      </View>
    </View>
  )
}

{/* <TouchableOpacity style={styles.taskCheckbox} onPress={handleTask} >
        {!onConcluded
          ?
          <>
            <Checkbox isChecked={false} />

            <Text style={styles.taskName}>
              {task}
            </Text>
          </>
          :
          <>
            <Checkbox isChecked={true} />

            <Text style={styles.taskConcluded}>
              {task}
            </Text>
          </>
        }
        <DeleteButton />
      </TouchableOpacity> */}