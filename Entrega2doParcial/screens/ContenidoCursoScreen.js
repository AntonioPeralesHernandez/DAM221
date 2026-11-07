import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Encabezado, BotonInicio } from '../components/Elementos';

export default function ContenidoCursoScreen() {
  return (
    <View style={styles.container}>
      <Encabezado titulo="Contenido del curso" />

      <Text style={styles.numero}>Lección #1</Text>

      <View style={styles.video}>
        <Text style={styles.play}>▶</Text>
        <Text style={styles.etiqueta}>Video y contenido</Text>
      </View>

      <Text style={styles.tituloProgreso}>Progreso del curso</Text>

      <View style={styles.barra}>
        <View style={styles.avance} />
      </View>
      <Text style={styles.porcentaje}>45% completado</Text>

      <View style={styles.continuar}>
        <Text style={styles.texto}>Continuar →</Text>
      </View>

      <BotonInicio />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F6FA', padding: 20 },
  numero: { fontSize: 22, fontWeight: 'bold', color: '#70158A', marginBottom: 20 },
  video: { backgroundColor: '#70158A', height: 190, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  play: { color: '#FFF', fontSize: 45 },
  etiqueta: { color: '#FFF', marginTop: 10, fontSize: 14 },
  tituloProgreso: { fontSize: 17, fontWeight: 'bold', marginTop: 30, color: '#333' },
  barra: { height: 14, backgroundColor: '#DDD', borderRadius: 10, marginTop: 12, overflow: 'hidden' },
  avance: { width: '45%', height: '100%', backgroundColor: '#35CC91', borderRadius: 10 },
  porcentaje: { color: '#35A879', textAlign: 'right', marginTop: 8, fontWeight: 'bold' },
  continuar: { backgroundColor: '#70158A', padding: 15, borderRadius: 12, alignItems: 'center', marginTop: 30 },
  texto: { color: '#FFF', fontSize: 17, fontWeight: 'bold' },
});