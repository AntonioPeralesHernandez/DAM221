import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Encabezado } from '../components/Elementos';

export default function InicioAdminScreen() {
  const opciones = [
    { nombre: 'Pedidos', descripcion: 'Solicitudes recibidas', color: '#70158A', icono: '🛒' },
    { nombre: 'Clientes', descripcion: 'Usuarios registrados', color: '#35CC91', icono: '👥' },
    { nombre: 'Cursos', descripcion: 'Administrar cursos', color: '#3049FF', icono: '📚' },
    { nombre: 'Reportes', descripcion: 'Consultar estadísticas', color: '#E5A000', icono: '📊' },
    { nombre: 'Ajustes', descripcion: 'Configuración general', color: '#E32636', icono: '⚙️' },
  ];

  return (
    <View style={styles.container}>

      <Encabezado titulo="Inicio Admin" />

      <Text style={styles.bienvenida}>¡Bienvenido, Administrador!</Text>
      <Text style={styles.descripcion}>
        Selecciona una opción para administrar tu plataforma.
      </Text>

      <View style={styles.grid}>
        {opciones.map((item, index) => (
          <Pressable
            key={index}
            style={[styles.tarjeta, { borderTopColor: item.color }]}
          >
            <View style={[styles.iconoFondo, { backgroundColor: item.color + '20' }]}>
              <Text style={styles.icono}>{item.icono}</Text>
            </View>

            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.detalle}>{item.descripcion}</Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.pie}>
        <Text style={styles.pieTexto}>Banco de Tiempo y Talento</Text>
        <Text style={styles.pieSubtexto}>Panel de administración</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F6FA',
    padding: 20,
  },
  bienvenida: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 7,
  },
  descripcion: {
    fontSize: 14,
    color: '#777',
    marginBottom: 25,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 15,
  },
  tarjeta: {
    width: '47%',
    minHeight: 145,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    borderTopWidth: 5,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  iconoFondo: {
    width: 48,
    height: 48,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  icono: {
    fontSize: 25,
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  detalle: {
    fontSize: 11,
    color: '#888',
    textAlign: 'center',
    marginTop: 5,
  },
  pie: {
    marginTop: 'auto',
    backgroundColor: '#F0EAF4',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  pieTexto: {
    color: '#70158A',
    fontWeight: 'bold',
    fontSize: 14,
  },
  pieSubtexto: {
    color: '#888',
    fontSize: 11,
    marginTop: 4,
  },
});