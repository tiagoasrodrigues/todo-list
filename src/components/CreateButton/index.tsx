import { TouchableOpacity, Image } from 'react-native';

import { styles } from "./styles";

export function CreateButton() {
  function handleTaskAdd() {
    console.log('Adicionei uma task 🎆');
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleTaskAdd}>
      <Image
        source={require('../../../assets/plus.png')}
      />
    </TouchableOpacity>
  )
}