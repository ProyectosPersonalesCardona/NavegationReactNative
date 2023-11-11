import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button, View,Alert, Text} from 'react-native';

const TextInputExample = () => {
  const [Nombre, onChangeText] = React.useState('');
  const [Edad, onChangeNumber] = React.useState('');
  const [Email, onChangeEmail] = React.useState('');
  const [pasword, onChangePas] = React.useState('');

  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.tit}>Bienvenido Al Registro</Text>
      <View style={styles.formulario}>
      <Text style={styles.texto}>Formulario De Datos</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Nombre"
        value={Nombre}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={Edad}
        placeholder="Edad"
        keyboardType="decimal-pad"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={Email}
        placeholder="Email"
        keyboardType='email-address'
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePas}
        value={pasword}
        placeholder="Contraseña"
        keyboardType="default"
      />
      <Button 
        title='Ingresar'
        color='#7f8fa6'
        accessiblityLabel='Saludar a una Persona'
        onPress={()=>{
          Alert.alert("Bienvenida",` Hola ${Nombre} Bienvenido`)
        }}> 
      </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  input: {
    height: 40,
    marginHorizontal: 1,
    marginBottom:20,
    borderWidth: 1,
    padding: 10,
    backgroundColor:'#fff',
    borderRadius:5
  },
  texto:{
    color:'#7f8fa6',
    fontSize:25,
    paddingVertical:20
  },
  formulario:{
    margin:20,
    height:400,
    borderRadius:10,
    padding:10,
    alignContent:'center' ,
    backgroundColor:'#000'
  },
  tit:{
    marginTop:80,
    textTransform:'uppercase',
    textAlign:'center',
    fontSize:25,
    color:'#000'
  }
});

export default TextInputExample;