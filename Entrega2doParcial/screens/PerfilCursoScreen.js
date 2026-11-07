import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Encabezado, BotonInicio } from '../components/Elementos';

export default function PerfilCursoScreen() {
  return (
    <View style={styles.container}>

      <Encabezado titulo="Perfil del curso" />

      <View style={styles.perfil}>
        <Text style={styles.avatar}>MP</Text>
        <Text style={styles.nombre}>Mayra Alargón</Text>
        <Text style={styles.rol}>Instructora</Text>
      </View>

      <View style={styles.dato}>
        <Text style={styles.etiqueta}>Curso</Text>
        <Text style={styles.texto}>Marketing Digital</Text>
      </View>

      <View style={styles.dato}>
        <Text style={styles.etiqueta}>Horario</Text>
        <Text style={styles.texto}>19:00 hrs</Text>
      </View>

      <View style={styles.puntos}>
        <Text style={styles.numero}>2</Text>
        <Text style={styles.textoPuntos}>Puntos necesarios</Text>
      </View>

      <BotonInicio />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F6FA',
    padding: 20,
  },
  perfil: {
    alignItems: 'center',
    marginBottom: 25,
  },
  avatar: {
    backgroundColor: '#F2EDF5',
    color: '#70158A',
    width: 85,
    height: 85,
    borderRadius: 45,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 27,
    fontWeight: 'bold',
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 12,
    color: '#333',
  },
  rol: {
    color: '#888',
    marginTop: 5,
  },
  dato: {
    backgroundColor: '#FFFFFF',
    padding: 17,
    borderRadius: 12,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#70158A',
    elevation: 2,
  },
  etiqueta: {
    color: '#888',
    fontSize: 13,
    marginBottom: 5,
  },
  texto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
  },
  puntos: {
    backgroundColor: '#F2EDF5',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  numero: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#70158A',
  },
  textoPuntos: {
    color: '#777',
    marginTop: 5,
  },
});