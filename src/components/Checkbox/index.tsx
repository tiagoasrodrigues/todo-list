import { Image, View } from "react-native";
import { styles } from "./styles";

export function Checkbox() {
  let unchecked = <Image
    source={require('../../../assets/checkbox-false.png')}
  />
  let checked = <Image
    source={require('../../../assets/checkbox-true.png')}
  />
  let isChecked: boolean = false;

  return (
    <View style={styles.container}>
      {!isChecked
        ? <View
          style={styles.unchecked}
        >
          {unchecked}
        </View>
        :
        <View
          style={styles.checked}
        >
          {checked}
        </View>
      }
    </View>
  )
}