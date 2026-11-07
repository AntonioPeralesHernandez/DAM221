import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Encabezado, BotonInicio } from '../components/Elementos';

const reportes = [
  {
    titulo: 'Cursos más populares',
    descripcion: 'Marketing Empresarial y Diseño Gráfico'
  },
  {
    titulo: 'Participación de usuarios',
    descripcion: 'Los usuarios registrados y sus actividades'
  },
  {
    titulo: 'Actividad de instructores',
    descripcion: 'Servicios y cursos ofrecidos'
  }
];

export default function ReportesScreen() {
  return (
    <View style={styles.container}>
      <Encabezado titulo="Reportes y estadísticas" />

      <ScrollView contentContainerStyle={styles.contenido}>

        <Text style={styles.subtitulo}>Resumen general</Text>

        <View style={styles.grid}>
          <View style={styles.indicador}>
            <Text style={styles.numero}>25</Text>
            <Text style={styles.etiqueta}>Usuarios</Text>
          </View>

          <View style={styles.indicador}>
            <Text style={styles.numero}>12</Text>
            <Text style={styles.etiqueta}>Cursos</Text>
          </View>

          <View style={styles.indicador}>
            <Text style={styles.numero}>18</Text>
            <Text style={styles.etiqueta}>Intercambios</Text>
          </View>

          <View style={styles.indicador}>
            <Text style={styles.numero}>85</Text>
            <Text style={styles.etiqueta}>Puntos utilizados</Text>
          </View>
        </View>

        <Text style={styles.subtitulo}>Reportes disponibles</Text>

        {reportes.map((reporte, index) => (
          <View style={styles.card} key={index}>
            <Text style={styles.nombre}>{reporte.titulo}</Text>
            <Text style={styles.descripcion}>
              {reporte.descripcion}
            </Text>
            <Text style={styles.ver}>Consultar reporte</Text>
          </View>
        ))}

        <View style={styles.resumen}>
          <Text style={styles.nombre}>Actividad de la plataforma</Text>
          <Text style={styles.descripcion}>
            Información general sobre cursos, usuarios y
            actividades realizadas dentro de la comunidad.
          </Text>
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
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#70158A',
    marginBottom: 14,
    marginTop: 8
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  indicador: {
    backgroundColor: '#FFFFFF',
    width: '48%',
    padding: 17,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12
  },
  numero: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#70158A'
  },
  etiqueta: {
    color: '#555555',
    marginTop: 5,
    textAlign: 'center'
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#70158A',
    marginBottom: 7
  },
  descripcion: {
    color: '#555555',
    lineHeight: 20
  },
  ver: {
    color: '#269B68',
    fontWeight: 'bold',
    marginTop: 12
  },
  resumen: {
    backgroundColor: '#E5D7ED',
    padding: 16,
    borderRadius: 10,
    marginTop: 5
  }
});
