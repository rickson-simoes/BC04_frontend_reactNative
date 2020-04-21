import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import {api} from './services/api';


export default function App() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    api.get('tech').then(response => {
      setTechs(response.data);
    });
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="green"/>
      <View style={estilo.container}>
        {techs.map(tech => <Text style={estilo.fonte} key={tech.id}> {tech.name} </Text>)}
      </View>
    </>
    );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fonte: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
});