import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';

const DATA = [
  {
    id: '33481474',
    title: 'Luis Cardona',
    urlImgen: 'https://picsum.photos/id/50/200/200',
    colonia:"Col. La Vega",
    edad:"23"
  },
  {
    id: '33481475',
    title: 'Jose Mendoza',
    urlImgen: 'https://picsum.photos/id/70/200/200',
    colonia:"Col. Reparto",
    edad:"23"
  },
  {
    id: '33481476',
    title: 'Carla Cuevas',
    urlImgen: 'https://picsum.photos/id/90/200/200',
    colonia:"Col. A",
    edad:"24"
  },
  {
    id: '33481477',
    title: 'Luis Andrades',
    urlImgen: 'https://picsum.photos/id/76/200/200',
    colonia:"Col. B",
    edad:"25"
  },
  {
    id: '33481478',
    title: 'Jose Martinez',
    urlImgen: 'https://picsum.photos/id/70/200/200',
    colonia:"Col. C",
    edad:"26"
  },
  {
    id: '33481479',
    title: 'Carla Martinez',
    urlImgen: 'https://picsum.photos/id/100/200/200',
    colonia:"Col. D",
    edad:"27"
  },
  {
    id: '33481490',
    title: 'Andres Gustavo',
    urlImgen: 'https://picsum.photos/id/140/200/200',
    colonia:"Col. E",
    edad:"28"
  },
  {
    id: '33481481',
    title: 'Maria Mendoza',
    urlImgen: 'https://picsum.photos/id/170/200/200',
    colonia:"Col. F",
    edad:"29"
  },
  {
    id: '33481482',
    title: 'Adnibal Cuevas',
    urlImgen: 'https://picsum.photos/id/190/200/200',
    colonia:"Col. G",
    edad:"30"
  },
  
  {
    id: '33481482',
    title: 'Allan Castellanos',
    urlImgen: 'https://picsum.photos/id/290/200/200',
    colonia:"Col. H",
    edad:"31"
  },
  {
    id: '33481483',
    title: 'Adnibal Cuevas',
    urlImgen: 'https://picsum.photos/id/190/200/200',
    colonia:"Col. G",
    edad:"30"
  },
  
  {
    id: '33481484',
    title: 'Allan Castellanos',
    urlImgen: 'https://picsum.photos/id/290/200/200',
    colonia:"Col. H",
    edad:"31"
  },
];

const ListaPersonas = ({elemento}) => (
  <TouchableOpacity style={styles.Item} onPress={
    ()=>Alert.alert('Datos Personales',`
     ${elemento.title} 
     ${elemento.colonia} 
     ${elemento.edad} años de edad`)
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
        renderItem={({item}) => <ListaPersonas elemento={item} />}
        keyExtractor={elemento => elemento.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(34,34,147,1) 25%, rgba(117,21,196,1) 100%)',
    padding: 5,
    marginTop:25
  },
  Item: {
    flex: 1,
    margin:5,
    padding:5,
    shadow: 'rgba(255,255,255,1)',
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems:"center", 
    borderRadius:10,
    height:200
  },
  title: {
    fontSize: 16,
    color:"#fff",
    margin:12
  },
  imagen:{
    width:160,
    height: 150,
    borderRadius:10
  }
});

export default Listados;