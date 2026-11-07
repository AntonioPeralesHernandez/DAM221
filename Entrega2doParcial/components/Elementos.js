import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

// Encabezado reutilizable para las pantallas
export function Encabezado({ titulo }) {
  return (
    <View style={styles.encabezado}>
      <View style={styles.linea} />
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.subtitulo}>Banco de Tiempo y Talento</Text>
    </View>
  );
}

// Botón de inicio
export function BotonInicio({ onPress }) {
  return (
    <Pressable
      style={styles.inicio}
      onPress={onPress}
    >
      <Text style={styles.icono}>⌂</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  encabezado: {
    backgroundColor: '#F2EDF5',
    paddingVertical: 18,
    paddingHorizontal: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 25,
    borderBottomWidth: 3,
    borderBottomColor: '#70158A',
    elevation: 3,
  },
  linea: {
    width: 35,
    height: 4,
    backgroundColor: '#35CC91',
    borderRadius: 5,
    marginBottom: 8,
  },
  titulo: {
    fontSize: 23,
    color: '#70158A',
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
  },
  inicio: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#70158A',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 25,
    elevation: 4,
  },
  icono: {
    fontSize: 38,
    color: '#FFFFFF',
  },
});