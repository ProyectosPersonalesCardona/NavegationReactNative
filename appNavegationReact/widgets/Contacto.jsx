import React from 'react';
import {
  SafeAreaView,
  View,
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

const ContactoLista = ({elemento}) => (
  <TouchableOpacity style={styles.Item} onPress={
    ()=>Alert.alert('Contacto',`Llamando a ${elemento.title}`)
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
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor:'ffffff'
  },
  Item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    borderBottomWidth:1,
    borderBottomColor:'#ccc'
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