import { StyleSheet } from "react-native";


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
    marginBottom: 32
  }
});