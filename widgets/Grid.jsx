import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';

const DATA = [
  {
    id: '33481474',
    title: 'Luis Cardona',
    urlImgen: 'https://picsum.photos/id/100/200/200'
  },
  {
    id: '33481475',
    title: 'Jose Mendoza',
    urlImgen: 'https://picsum.photos/id/100/200/200'
  },
  {
    id: '33481476',
    title: 'Carla Cuevas',
    urlImgen: 'https://picsum.photos/id/100/200/200'
  },
];

const ListaPersonas = ({elemento}) => (
  <TouchableOpacity style={styles.Item} onPress={
    ()=>Alert.alert('Datos Personales',`Nombre: ${elemento.title}`)
  }>
    <Image style={styles.imagen}
      source=
      {{
        uri: elemento.urlImgen,
      }}
    />
    <Text style={styles.title}>{elemento.title}</Text>
  </TouchableOpacity>
);

const Listados = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA} 
        renderItem={({item}) => <ContactoLista elemento={item} />}
        keyExtractor={elemento => elemento.id}
      />
    </SafeAreaView>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'ffffff',
    padding: 10
  },
  Item: {
    flex: 1,
    margin:10,
    padding:20,
    backgroundColor: '#f9c2ff',
    alignItems: "center",
    justifyContent:"center"
  },
  title: {
    fontSize: 16,
  },
  imagen:{
    width:50,
    height: 50,
    borderRadius:25,
    marginRight:10

  }
});

export default Listados;