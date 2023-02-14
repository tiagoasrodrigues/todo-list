import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Task } from "../../components/Task";

import { styles } from './styles';

export function Home() {
  function handleTaskAdd() {
    console.log('Add');

  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/logo.png')}
        />
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={'#808080'}
          keyboardType="default"
        />

        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <Image
            source={require('../../../assets/plus.png')}
          />
        </TouchableOpacity>
      </View>

      {/* <Task /> */}
    </View>
  )
}