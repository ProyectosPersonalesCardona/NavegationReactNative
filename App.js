import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ListadoContactos from './widgets/Contacto'
import Gride from './widgets/Grid'
import Formulario from './widgets/Formulario'

export default function App() {
  return (
    <View style={styles.container}>
      <Formulario/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor:'ffffff'
  },
})
