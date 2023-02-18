import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    width: '100%',
    height: 64,
    marginBottom: 8,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  taskName: {
    color: "#f2f2f2",
    flex: 1,
    fontSize: 14,
    textAlign: 'justify',
  },

  button: {
    margin: 10
  }
});