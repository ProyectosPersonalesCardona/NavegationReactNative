import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

const [nombre, onChangeText] = React.useState('Useless Text');
const [number, onChangeNumber] = React.useState('');

const Formularios =()=>{
  return (
    <View>
      <Text>Ingrese su texto</Text>
      <TextInput 
        placeholder='Nombre'
        value={nombre}

      />
      <Button 
        tittle='saludar'
        color='#863647'
        accessiblityLabel='Saludar a una Persona'
        onPress={()=>{
          Alert.alert("saludar",` hola mundo ${nombre}`)
        }}> 
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Formularios;