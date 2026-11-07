import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { Encabezado, BotonInicio } from '../components/Elementos';

export default function AjustesScreen() {
  const [tema, setTema] = useState(true);

  return (
    <View style={styles.container}>
      <Encabezado titulo="Ajustes" />

      <Text style={styles.subtitulo}>Personaliza tu experiencia</Text>

      <View style={styles.opcion}>
        <View>
          <Text style={styles.nombre}>Tema y apariencia</Text>
          <Text style={styles.descripcion}>Activar modo oscuro</Text>
        </View>
        <Switch
          value={tema}
          onValueChange={setTema}
          trackColor={{ false: '#DDD', true: '#35CC91' }}
          thumbColor={tema ? '#70158A' : '#FFF'}
        />
      </View>

      <View style={styles.opcion}>
        <Text style={styles.nombre}>❔ Ayuda y soporte</Text>
        <Text style={styles.flecha}>›</Text>
      </View>

      <View style={styles.cerrar}>
        <Text style={styles.textoCerrar}>Cerrar sesión</Text>
      </View>

      <BotonInicio />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F6FA', padding: 20 },
  subtitulo: { color: '#777', textAlign: 'center', marginBottom: 25 },
  opcion: {
    backgroundColor: '#FFF',
    padding: 18,
    borderRadius: 14,
    marginBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
  },
  nombre: { color: '#70158A', fontSize: 15, fontWeight: 'bold' },
  descripcion: { color: '#888', fontSize: 12, marginTop: 5 },
  flecha: { fontSize: 25, color: '#70158A' },
  cerrar: {
    borderWidth: 1,
    borderColor: '#E32636',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  textoCerrar: { color: '#E32636', fontWeight: 'bold' },
});