import { Image, View } from "react-native";
import { styles } from "./styles";

type CheckboxProps = {
  isChecked: boolean;
}

let unchecked = <Image
  source={require('../../../assets/checkbox-false.png')}
/>
let checked = <Image
  source={require('../../../assets/checkbox-true.png')}
/>

export function Checkbox({ isChecked }: CheckboxProps) {
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