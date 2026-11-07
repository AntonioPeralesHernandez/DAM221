import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Encabezado, BotonInicio } from '../components/Elementos';

export default function ClientesScreen() {
  const clientes = [
    { iniciales: 'JP', nombre: 'Juan Pérez', puntos: 12 },
    { iniciales: 'MG', nombre: 'María Gómez', puntos: 15 },
    { iniciales: 'CR', nombre: 'Carlos Ruiz', puntos: 22 },
  ];

  return (
    <View style={styles.container}>
      <Encabezado titulo="Clientes" />

      <Text style={styles.subtitulo}>Usuarios registrados</Text>

      {/* Botón visual para agregar usuarios */}
      <View style={styles.agregar}>
        <Text style={styles.textoAgregar}>+ Agregar usuario</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {clientes.map((item, index) => (
          <View key={index} style={styles.tarjeta}>
            <Text style={styles.avatar}>{item.iniciales}</Text>

            <View style={styles.info}>
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text style={styles.estado}>Cliente activo</Text>
              <Text style={styles.puntos}>
                {item.puntos} puntos
              </Text>
            </View>

            {/* Opciones visuales del CRUD */}
            <View style={styles.acciones}>
              <Text style={styles.editar}>Editar</Text>
              <Text style={styles.eliminar}>Eliminar</Text>
            </View>
          </View>
        ))}
      </ScrollView>

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
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  agregar: {
    backgroundColor: '#70158A',
    padding: 13,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 18,
  },
  textoAgregar: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  tarjeta: {
    backgroundColor: '#FFF',
    padding: 15,
    marginBottom: 15,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#70158A',
    elevation: 3,
  },
  avatar: {
    backgroundColor: '#F2EDF5',
    color: '#70158A',
    width: 48,
    height: 48,
    borderRadius: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  nombre: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
  },
  estado: {
    color: '#35A879',
    fontSize: 12,
    marginTop: 4,
  },
  puntos: {
    color: '#70158A',
    fontSize: 12,
    marginTop: 4,
    fontWeight: 'bold',
  },
  acciones: {
    gap: 7,
    alignItems: 'center',
  },
  editar: {
    backgroundColor: '#F2EDF5',
    color: '#70158A',
    padding: 7,
    borderRadius: 7,
    fontSize: 11,
    fontWeight: 'bold',
    overflow: 'hidden',
  },
  eliminar: {
    backgroundColor: '#FCE8E8',
    color: '#E32636',
    padding: 7,
    borderRadius: 7,
    fontSize: 11,
    fontWeight: 'bold',
    overflow: 'hidden',
  },
});