import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    height: 64,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 8,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },

  taskCheckbox: {
    flexDirection: 'row',
  },

  taskName: {
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