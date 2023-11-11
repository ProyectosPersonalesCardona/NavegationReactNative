import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ListadoContactos from './widgets/Contacto'
import Gride from './widgets/Grid'
import Formulario from './widgets/Formulario'
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './widgets/tabs';

export default function App() {
  return (
    <NavigationContainer >
      <Tabs ></Tabs>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

