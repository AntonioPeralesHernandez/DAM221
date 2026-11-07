import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function SolicitudScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.usuario}>♙</Text>

      <Text style={styles.titulo}>Solicitud</Text>

      <Text style={styles.subtitulo}>
        ¿Qué deseas realizar?
      </Text>

      <Pressable style={styles.boton}>
        <Text style={styles.icono}>📚</Text>
        <Text style={styles.texto}>Tomar curso</Text>
        <Text style={styles.descripcion}>Aprende nuevas habilidades</Text>
      </Pressable>

      <Pressable style={styles.boton}>
        <Text style={styles.icono}>🎓</Text>
        <Text style={styles.texto}>Impartir curso</Text>
        <Text style={styles.descripcion}>Comparte tus conocimientos</Text>
      </Pressable>

      <View style={styles.pie}>
        <Text style={styles.pieTexto}>Banco de Tiempo y Talento</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F6FA',
    padding: 25,
  },
  usuario: {
    backgroundColor: '#F2EDF5',
    padding: 12,
    textAlign: 'right',
    fontSize: 25,
    borderRadius: 12,
  },
  titulo: {
    color: '#70158A',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },
  subtitulo: {
    color: '#777',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 30,
  },
  boton: {
    backgroundColor: '#FFFFFF',
    padding: 22,
    borderRadius: 18,
    alignItems: 'center',
    marginBottom: 25,
    borderLeftWidth: 5,
    borderLeftColor: '#70158A',
    elevation: 3,
  },
  icono: {
    fontSize: 35,
    marginBottom: 10,
  },
  texto: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#70158A',
  },
  descripcion: {
    fontSize: 13,
    color: '#888',
    marginTop: 6,
  },
  pie: {
    marginTop: 'auto',
    backgroundColor: '#F2EDF5',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  pieTexto: {
    color: '#70158A',
    fontWeight: 'bold',
  },
});