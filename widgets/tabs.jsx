import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'

import React from "react";

import Grid from './Grid'
import Formulario from './Formulario'
import Contacto from './Contacto'

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator 
        screenOptions={({route})=>({
            tabBarIcon:({focused, color, size})=>{
                let nombreIcono;
                if (route.name=== 'Usuarios'){
                    nombreIcono=focused? 'earth': "earth-outline"
                }else if(route.name=== 'Formularios'){
                    nombreIcono=focused? 'document-text': "document-text-outline"
                }else{
                    nombreIcono=focused? 'people': "people-outline"
                }
                return <Icon name={nombreIcono} size={size} color={color}></Icon>
            }
        })}
    >
      <Tab.Screen name="Usuarios" component={Grid}/>
      <Tab.Screen name="Formularios" component={Formulario}/>
      <Tab.Screen name="Contactos" component={Contacto} />
    </Tab.Navigator>
  );
}


export default Tabs;