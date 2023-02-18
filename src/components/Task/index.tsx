import { Button, Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from './styles';

export function Task() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Image
          source={require('../../../assets/trash.png')}
        />
      </TouchableOpacity>

      <Text style={styles.taskName}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Image
          source={require('../../../assets/trash.png')}
        />
      </TouchableOpacity>
    </View>
  )
}