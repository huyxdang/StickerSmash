import { Text, View, StyleSheet } from 'react-native';
import { Link } from "expo-router";

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
        <Link href={"/"} style={styles.button}>
        Go back to home screen!
        </Link>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});