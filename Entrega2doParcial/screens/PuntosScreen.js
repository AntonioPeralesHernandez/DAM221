import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Encabezado, BotonInicio } from '../components/Elementos';

export default function PuntosScreen() {
  return (
    <View style={styles.container}>
      <Encabezado titulo="Mis puntos" />

      <Text style={styles.subtitulo}>¿Cómo funcionan los puntos?</Text>

      <View style={styles.regla}>
        <Text style={styles.verde}>1 Hora</Text>
        <Text style={styles.igual}>=</Text>
        <Text style={styles.azul}>1 Punto</Text>
      </View>

      <View style={styles.tarjeta}>
        <Text style={styles.icono}>⭐</Text>
        <Text style={styles.texto}>Puntos acumulados</Text>
        <Text style={styles.numero}>8</Text>
        <Text style={styles.descripcion}>Puntos disponibles</Text>
      </View>

      <BotonInicio />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F6FA', padding: 20 },
  subtitulo: { fontSize: 16, color: '#777', textAlign: 'center', marginBottom: 20 },
  regla: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#70158A',
  },
  verde: { color: '#35CC91', fontSize: 22, fontWeight: 'bold' },
  igual: { fontSize: 22, marginHorizontal: 15 },
  azul: { color: '#3049FF', fontSize: 22, fontWeight: 'bold' },
  tarjeta: {
    backgroundColor: '#FFF',
    padding: 25,
    borderRadius: 18,
    alignItems: 'center',
    marginTop: 30,
    elevation: 3,
  },
  icono: { fontSize: 35 },
  texto: { fontSize: 17, color: '#70158A', fontWeight: 'bold', marginTop: 10 },
  numero: { fontSize: 55, color: '#35CC91', fontWeight: 'bold' },
  descripcion: { color: '#888', fontSize: 13 },
});