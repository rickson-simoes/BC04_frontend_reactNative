import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
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
      <StatusBar backgroundColor="green"/>

      <SafeAreaView style={estilo.container}>
        <FlatList          
          data={techs}
          keyExtractor={techs.id}
          renderItem={({item}) => <Text style={estilo.fonteLista}>{item.name}</Text>}
        />

        <TouchableOpacity>
          <Text style={estilo.fonte}>Add Tech</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
    );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  fonte: {
    color: 'white',
    fontWeight: 'bold'
  },
  fonteLista: {
    color: "white",
    fontSize: 24
  }
});