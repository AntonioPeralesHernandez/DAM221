import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default function AccesoScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.encabezado}>
        <Text style={styles.icono}>◈</Text>
        <Text style={styles.titulo}>Banco de Tiempo</Text>
        <Text style={styles.descripcion}>Tiempo y Talento</Text>
      </View>

      <View style={styles.formulario}>
        <Text style={styles.subtitulo}>¡Bienvenido!</Text>
        <Text style={styles.instruccion}>
          Ingresa tus datos para continuar
        </Text>

        <Text style={styles.etiqueta}>Usuario</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu usuario"
          placeholderTextColor="#999"
        />

        <Text style={styles.etiqueta}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu contraseña"
          placeholderTextColor="#999"
          secureTextEntry
        />

        <Pressable style={styles.boton}>
          <Text style={styles.textoBoton}>Iniciar sesión</Text>
        </Pressable>
      </View>

      <Text style={styles.pie}>
        Comparte tus habilidades, intercambia tu tiempo.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F6FA',
    padding: 22,
    justifyContent: 'center',
  },
  encabezado: {
    alignItems: 'center',
    marginBottom: 35,
  },
  icono: {
    fontSize: 55,
    color: '#70158A',
    marginBottom: 8,
  },
  titulo: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#70158A',
  },
  descripcion: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  formulario: {
    backgroundColor: '#FFFFFF',
    padding: 22,
    borderRadius: 20,
    elevation: 4,
  },
  subtitulo: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  instruccion: {
    textAlign: 'center',
    color: '#888',
    marginTop: 8,
    marginBottom: 25,
  },
  etiqueta: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F2EDF5',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E2D6E9',
  },
  boton: {
    backgroundColor: '#70158A',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBoton: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  pie: {
    textAlign: 'center',
    color: '#888',
    marginTop: 35,
    fontSize: 12,
  },
});