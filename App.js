import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.border}>
      <Text>Nama : Rayival Dede Saputra!</Text>
      <Text>Umur : 16 Tahun</Text>
      <Text>NIS : 22310273</Text>
      <Text>Kelas : XI-PPLG-3</Text>
      <Text>Alamat : Jl. Taman Makam Pahlawan</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    borderWidth: 5,
    borderColor: 'fff',
    padding: 50,
    borderRadius:20,
  }
});
