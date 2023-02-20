import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    width: '100%',
    marginBottom: 8,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  taskCheckbox: {
    flexDirection: 'row',
  },

  task: {
    color: "#f2f2f2",
    flex: 1,
    fontSize: 14,
    textAlignVertical: "center",
  },

  taskConcluded: {
    color: "#808080",
    flex: 1,
    fontSize: 14,
    textAlignVertical: "center",
    textDecorationLine: "line-through"
  }
});