import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapView, { Marker } from 'react-native-maps';

import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button, View,Alert, Text} from 'react-native';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Mapas" component={Mapas} />
    </Stack.Navigator>
  </NavigationContainer>
  );



  function Login({ navigation }) {
    const [Email, onChangeEmail] = React.useState('');
    const [pasword, onChangePas] = React.useState('');
  
    return (
      <SafeAreaView style={styles.container} >
        <Text style={styles.tit}>Bienvenido Al Sistema</Text>
  
        <View style={styles.formulario}>
        <Text style={styles.texto}>Login</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={Email}
          placeholder="Ingresa tu email"
          keyboardType='email-address'
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePas}
          value={pasword}
          placeholder="Ingresa tu contraseña"
          secureTextEntry={true}
          keyboardType="default"
        />
        <Button 
          title='Ingresar'
          color='#7f8fa6'
          accessiblityLabel='Saludar a una Persona'
          onPress={()=>{
            if(Email==="Examen1@unitec.edu" && pasword==="Admin"){
              Alert.alert("Bienvenida",` Hola ${Email} Bienvenido`);
              navigation.navigate('Mapas')
            }else{
              Alert.alert("Validacion",` Lo sentimos Tu Email o Contraseña no fueron correctos Intenta Nuevamente`)
            }
          }}> 
        </Button>
        </View>
      </SafeAreaView>
    );
  };
  
function Mapas() {

  const points=[
    {
      titulo:"Honduras",
      ubicacion:{
        latitude: 14.555285993947152,
        longitude:-86.56461460850234,
      },
    descripcion:" Pais de Centro America"
    },
    {
      titulo:"Panama",
      ubicacion:{
        latitude: 8.64493308456712,
        longitude:-80.04094619303942,
      },
    descripcion:" Pais de Centro America"
    },
    {
      titulo:"Nicaragua",
      ubicacion:{
        latitude: 13.327070235166378,
        longitude:-85.12974696233869,
      },
    descripcion:" Pais de Centro America"
    }
  ];


   const POINT=()=>{
    return points.map((poi, i)=>
      <Marker
        key={i}
        coordinate={poi.ubicacion}
        title={poi.titulo}
        description={poi.descripcion}
      />
    )
   }


  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
        onRegionChange={region=> console.log(region)}
        initialRegion={{"latitude": 14.555285993947152, "latitudeDelta": 12.449216950003548, "longitude": -86.56461460850234, "longitudeDelta": 7.338866643260047}}
      >
        {POINT()}
        
      </MapView>
      <Button 
          title='Ver Una Ubicacion'
          color='#7f8fa6'
          accessiblityLabel='Saludar a una Persona'
          onPress={()=>{
            
          }}> 
          </Button>
    </View>
  );
}

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '90%',
    marginBottom:10
  },
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

