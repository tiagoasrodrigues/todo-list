import { StyleSheet, TextBase } from "react-native";


export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a1a',

    flex: 1,
  },

  logoContainer: {
    backgroundColor: '#0d0d0d',

    height: 173,
    color: '#4ea8de',
    textAlign: 'center',
    paddingTop: 70,
    alignItems: 'center',
  },

  input: {
    flex: 1,

    backgroundColor: '#262626',

    marginLeft: 24,
    padding: 16,
    height: 54,

    borderRadius: 6,

    color: '#f2f2f2',
    fontSize: 16,
  },

  button: {
    backgroundColor: '#1e6f9f',

    marginLeft: 4,
    marginRight: 24,
    height: 52,
    width: 52,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 6
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