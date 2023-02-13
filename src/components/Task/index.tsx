import { Text, View } from "react-native";

import { styles } from './styles';

export function Task() {
  return (
    <View style={styles.container}>
      <Text style={styles.taskName}>
        Hello World!
      </Text>
    </View>
  )
}