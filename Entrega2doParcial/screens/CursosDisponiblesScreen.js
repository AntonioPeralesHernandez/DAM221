import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView
} from 'react-native';

import { Encabezado, BotonInicio } from '../components/Elementos';

const cursos = [
  {
    id: 1,
    nombre: 'Marketing Empresarial',
    instructor: 'Juan Pérez',
    categoria: 'Negocios',
    habilidad: 'Marketing',
    puntos: 2
  },
  {
    id: 2,
    nombre: 'Diseño Gráfico',
    instructor: 'María Gómez',
    categoria: 'Diseño',
    habilidad: 'Creatividad',
    puntos: 3
  },
  {
    id: 3,
    nombre: 'Programación Web',
    instructor: 'Carlos Ruiz',
    categoria: 'Tecnología',
    habilidad: 'Programación',
    puntos: 4
  }
];

export default function CursosDisponiblesScreen() {
  return (
    <View style={styles.container}>
      <Encabezado titulo="Cursos disponibles" />

      <ScrollView contentContainerStyle={styles.contenido}>

        <TextInput
          style={styles.buscar}
          placeholder="Buscar curso..."
        />

        <Text style={styles.titulo}>Categorías</Text>

        <View style={styles.categorias}>
          <Text style={styles.categoria}>Negocios</Text>
          <Text style={styles.categoria}>Diseño</Text>
          <Text style={styles.categoria}>Tecnología</Text>
          <Text style={styles.categoria}>Idiomas</Text>
        </View>

        <Text style={styles.titulo}>Habilidades disponibles</Text>

        <View style={styles.habilidades}>
          <Text style={styles.habilidad}>Marketing</Text>
          <Text style={styles.habilidad}>Creatividad</Text>
          <Text style={styles.habilidad}>Programación</Text>
        </View>

        <Text style={styles.titulo}>Cursos registrados</Text>

        {cursos.map((curso) => (
          <View style={styles.card} key={curso.id}>
            <Text style={styles.nombre}>{curso.nombre}</Text>
            <Text style={styles.texto}>
              Instructor: {curso.instructor}
            </Text>
            <Text style={styles.texto}>
              Categoría: {curso.categoria}
            </Text>
            <Text style={styles.texto}>
              Habilidad: {curso.habilidad}
            </Text>

            <View style={styles.pie}>
              <Text style={styles.puntos}>
                {curso.puntos} puntos
              </Text>
              <Text style={styles.boton}>Ver curso</Text>
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
    backgroundColor: '#F2EDF5'
  },
  contenido: {
    padding: 18
  },
  buscar: {
    backgroundColor: '#FFFFFF',
    padding: 13,
    borderRadius: 10,
    marginBottom: 18
  },
  titulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#70158A',
    marginBottom: 12,
    marginTop: 8
  },
  categorias: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 15
  },
  categoria: {
    backgroundColor: '#70158A',
    color: '#FFFFFF',
    padding: 9,
    borderRadius: 15
  },
  habilidades: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 15
  },
  habilidad: {
    backgroundColor: '#DDF5E9',
    color: '#247A55',
    padding: 9,
    borderRadius: 15
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#70158A',
    marginBottom: 7
  },
  texto: {
    color: '#555555',
    marginBottom: 4
  },
  pie: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12
  },
  puntos: {
    color: '#269B68',
    fontWeight: 'bold'
  },
  boton: {
    backgroundColor: '#70158A',
    color: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8
  }
});