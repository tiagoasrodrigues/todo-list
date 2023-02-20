import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a1a',

    flex: 1,
  },

  form: {
    flexDirection: 'row',
    width: '100%',
    marginTop: -26,
    marginBottom: 8
  },

  tasksContainer: {
    margin: 24,
    alignItems: 'center',
  },

  taskEmpty: {
    height: 200,
    width: '100%',
    marginTop: 20,

    alignItems: 'center',
    justifyContent: 'center',

    borderTopColor: '#333333',
    borderTopWidth: 1
  },

  taskEmptyIcon: {
    marginBottom: 16
  },

  taskEmptyTextTitle: {
    color: '#808080',
    fontSize: 14,
    fontWeight: 'bold'
  },

  taskEmptyTextSubtitle: {
    color: '#808080',
    fontSize: 14,
  }
});