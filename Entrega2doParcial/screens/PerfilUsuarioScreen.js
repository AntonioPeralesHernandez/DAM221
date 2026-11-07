import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Encabezado, BotonInicio } from '../components/Elementos';

export default function PerfilUsuarioScreen() {
  return (
    <View style={styles.container}>
      <Encabezado titulo="Mi perfil" />

      <ScrollView contentContainerStyle={styles.contenido}>

        <View style={styles.perfil}>
          <View style={styles.avatar}>
            <Text style={styles.iniciales}>JP</Text>
          </View>

          <Text style={styles.nombre}>Juan Pérez</Text>
          <Text style={styles.rol}>Usuario / Estudiante</Text>
          <Text style={styles.correo}>juanperez@gmail.com</Text>
        </View>

        <View style={styles.puntos}>
          <Text style={styles.numero}>8</Text>
          <Text style={styles.textoPuntos}>Puntos disponibles</Text>
        </View>

        <Text style={styles.titulo}>Mis actividades</Text>

        <View style={styles.card}>
          <Text style={styles.nombreCard}>Cursos tomados</Text>
          <Text style={styles.detalle}>Marketing Empresarial</Text>
          <Text style={styles.detalle}>Diseño Gráfico</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.nombreCard}>Servicios que ofrezco</Text>
          <Text style={styles.detalle}>Diseño de presentaciones</Text>
          <Text style={styles.detalle}>Apoyo en tareas escolares</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.nombreCard}>Calificaciones</Text>
          <Text style={styles.calificacion}>★★★★★ 4.8 / 5</Text>
          <Text style={styles.detalle}>Valoración de otros usuarios</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.nombreCard}>Mis favoritos</Text>
          <Text style={styles.detalle}>♡ Marketing Empresarial</Text>
          <Text style={styles.detalle}>♡ Programación Web</Text>
        </View>

        <View style={styles.opcion}>
          <Text style={styles.opcionTexto}>Editar perfil</Text>
        </View>

        <View style={styles.opcion}>
          <Text style={styles.opcionTexto}>Configuración</Text>
        </View>

      </ScrollView>

      <BotonInicio />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2EDF5'
  },
  contenido: {
    padding: 18
  },
  perfil: {
    alignItems: 'center',
    marginBottom: 20
  },
  avatar: {
    width: 85,
    height: 85,
    borderRadius: 45,
    backgroundColor: '#70158A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  iniciales: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold'
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#70158A'
  },
  rol: {
    color: '#555555',
    marginTop: 4
  },
  correo: {
    color: '#777777',
    marginTop: 3
  },
  puntos: {
    backgroundColor: '#35CC91',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20
  },
  numero: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  textoPuntos: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  titulo: {
    fontSize: 18,
    color: '#70158A',
    fontWeight: 'bold',
    marginBottom: 12
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12
  },
  nombreCard: {
    color: '#70158A',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8
  },
  detalle: {
    color: '#555555',
    marginBottom: 5
  },
  calificacion: {
    color: '#D99A16',
    fontWeight: 'bold',
    marginBottom: 5
  },
  opcion: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 9,
    marginBottom: 10
  },
  opcionTexto: {
    color: '#70158A',
    fontWeight: 'bold'
  }
});