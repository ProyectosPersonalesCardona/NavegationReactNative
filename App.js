import { StatusBar } from 'expo-status-bar';

import ListadoContactos from './widgets/Contacto'



export default function App() {
  return (
    <View style={styles.container}>
      <ListadoContactos/>
      <StatusBar style="auto" />
    </View>
  );
}

