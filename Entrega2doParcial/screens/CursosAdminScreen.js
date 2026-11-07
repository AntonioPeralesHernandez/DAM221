import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Encabezado, BotonInicio } from '../components/Elementos';

export default function CursosAdminScreen() {

  const cursos = [
    { instructor: 'Juan Pérez', curso: 'Marketing Empresarial', estado: 'Disponible' },
    { instructor: 'María Gómez', curso: 'Diseño Gráfico', estado: 'Disponible' },
    { instructor: 'Carlos Ruiz', curso: 'Programación Web', estado: 'Inactivo' },
  ];

  return (
    <View style={styles.container}>
      <Encabezado titulo="Administrar cursos" />

      <TextInput
        style={styles.buscar}
        placeholder="🔍 Buscar curso o instructor"
      />

      <View style={styles.filtros}>
        <Text style={styles.filtro}>Especialidad ▼</Text>
        <Text style={styles.filtro}>Estatus ▼</Text>
      </View>

      {/* Agregar curso */}
      <View style={styles.agregar}>
        <Text style={styles.textoAgregar}>+ Registrar nuevo curso</Text>
      </View>

      <Text style={styles.subtitulo}>Cursos registrados</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {cursos.map((item, index) => (
          <View key={index} style={styles.tarjeta}>
            <View style={styles.avatar}>
              <Text style={styles.inicial}>
                {item.instructor.charAt(0)}
              </Text>
            </View>

            <View style={styles.info}>
              <Text style={styles.nombre}>{item.instructor}</Text>
              <Text style={styles.curso}>{item.curso}</Text>
              <Text style={styles.estado}>{item.estado}</Text>
            </View>

            <View style={styles.acciones}>
              <Text style={styles.editar}>Editar</Text>
              <Text style={styles.eliminar}>Eliminar</Text>
            </View>
          </View>
        ))}

        {/* Solicitudes de cursos */}
        <View style={styles.solicitud}>
          <Text style={styles.titulo}>Solicitudes nuevas</Text>

          <Text style={styles.nombre}>Carlos Rodríguez</Text>
          <Text style={styles.curso}>Programación Web</Text>

          <View style={styles.botones}>
            <Text style={styles.rechazar}>Rechazar</Text>
            <Text style={styles.aceptar}>Aceptar</Text>
          </View>
        </View>
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
  buscar: {
    backgroundColor: '#FFF',
    padding: 13,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2D6E9',
    marginBottom: 15,
  },
  filtros: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  filtro: {
    backgroundColor: '#F2EDF5',
    color: '#70158A',
    padding: 10,
    borderRadius: 10,
  },
  agregar: {
    backgroundColor: '#70158A',
    padding: 13,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  textoAgregar: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  tarjeta: {
    backgroundColor: '#FFF',
    padding: 13,
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#70158A',
    elevation: 3,
  },
  avatar: {
    backgroundColor: '#F2EDF5',
    width: 42,
    height: 42,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inicial: {
    color: '#70158A',
    fontWeight: 'bold',
    fontSize: 17,
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  nombre: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 14,
  },
  curso: {
    color: '#777',
    marginTop: 5,
    fontSize: 12,
  },
  estado: {
    color: '#35A879',
    fontSize: 11,
    marginTop: 5,
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
    overflow: 'hidden',
  },
  eliminar: {
    backgroundColor: '#FCE8E8',
    color: '#E32636',
    padding: 7,
    borderRadius: 7,
    fontSize: 11,
    overflow: 'hidden',
  },
  solicitud: {
    backgroundColor: '#FFF',
    padding: 18,
    borderRadius: 15,
    marginTop: 15,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#E5A000',
    elevation: 3,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#70158A',
    marginBottom: 15,
  },
  botones: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
    marginTop: 20,
  },
  rechazar: {
    backgroundColor: '#FCE8E8',
    color: '#E32636',
    padding: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  aceptar: {
    backgroundColor: '#E0F5EA',
    color: '#258653',
    padding: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
});