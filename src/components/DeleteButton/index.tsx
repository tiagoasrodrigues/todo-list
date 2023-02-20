import { TouchableOpacity, Image } from 'react-native';

import { styles } from "./styles";

export function DeleteButton() {
  function handleTaskAdd() {
    console.log('Deletei uma task 😁');
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleTaskAdd}>
      <Image
        source={require('../../../assets/trash.png')}
      />
    </TouchableOpacity>
  )
}