import { TouchableOpacity, Image } from 'react-native';

import { styles } from "./styles";

function handleTaskRemove(task: string) {
  console.log(`Deletei a task ${task} 😁`);
}

export function DeleteButton() {
  return (
    <TouchableOpacity style={styles.container} onPress={() => handleTaskRemove('Antiga')}>
      <Image
        source={require('../../../assets/trash.png')}
      />
    </TouchableOpacity>
  )
}