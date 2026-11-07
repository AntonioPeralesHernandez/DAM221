import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView
} from 'react-native';

import { Encabezado, BotonInicio } from '../components/Elementos';

export default function ImpartirCursoScreen() {
  return (
    <View style={styles.container}>
      <Encabezado titulo="Ofrecer un servicio" />

      <ScrollView contentContainerStyle={styles.contenido}>

        <Text style={styles.descripcion}>
          Comparte tus conocimientos y ofrece una habilidad
          a otros usuarios de la comunidad.
        </Text>

        <Text style={styles.titulo}>Datos del servicio</Text>

        <Text style={styles.label}>Nombre de la habilidad</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. Diseño gráfico"
        />

        <Text style={styles.label}>Especialidad</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. Edición de imágenes"
        />

        <Text style={styles.label}>Descripción</Text>
        <TextInput
          style={[styles.input, styles.multilinea]}
          placeholder="Describe el servicio que puedes ofrecer"
          multiline
        />

        <Text style={styles.label}>Horario disponible</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. Lunes a viernes, 4:00 PM"
        />

        <Text style={styles.label}>Duración aproximada</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. 2 horas"
        />

        <View style={styles.boton}>
          <Text style={styles.textoBoton}>Registrar servicio</Text>
        </View>

        <Text style={styles.nota}>
          Tu servicio podrá ser revisado por el administrador.
        </Text>

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
  descripcion: {
    color: '#555555',
    marginBottom: 20,
    fontSize: 14
  },
  titulo: {
    color: '#70158A',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15
  },
  label: {
    color: '#444444',
    fontWeight: 'bold',
    marginBottom: 7
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 9,
    padding: 13,
    marginBottom: 15
  },
  multilinea: {
    height: 85,
    textAlignVertical: 'top'
  },
  boton: {
    backgroundColor: '#70158A',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5
  },
  textoBoton: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  nota: {
    color: '#777777',
    textAlign: 'center',
    marginTop: 12,
    fontSize: 12
  }
});