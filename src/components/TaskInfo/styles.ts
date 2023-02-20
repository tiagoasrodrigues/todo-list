import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  textInfo: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },

  tasksInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  tasksCreated: {
    color: '#4ea8de',
    fontSize: 14,
    fontWeight: 'bold'
  },

  tasksInfoNumber: {
    backgroundColor: '#333333',
    color: '#d9d9d9',

    marginLeft: 8,
    height: 18,
    width: 28,

    borderRadius: 10,

    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold'
  },

  tasksConcluded: {
    color: '#8284fa',

    fontSize: 14,
    fontWeight: 'bold'
  },
})