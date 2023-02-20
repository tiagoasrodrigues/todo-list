import { TextInput } from 'react-native';

import { styles } from "./styles";

export function Input() {
  return (
    <TextInput
      style={styles.container}
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor={'#808080'}
      keyboardType="default"
      selectionColor={"#f2f2f2"}
    />
  )
}