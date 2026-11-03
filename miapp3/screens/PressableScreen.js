import { useState } from 'react';
import {View,Text,Pressable,Switch,StyleSheet}from 'react-native';

export default function PressableScreen() {
  const [mensaje, setMensaje] = useState('Presiona el botón');
  const [activado, setActivado] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pressable</Text>

      <Text>{mensaje}</Text>

      <Pressable
      //Ejecuta una accion al presionar el boton 
        onPress={() => setMensaje('¡Botón presionado bro!')}
        // Se activa al comenzar la pulsacion 
        onPressIn={() => console.log('Inicio de pulsación bro')}
        // Se desactiva al terminar la pulsacion
        onPressOut={() => console.log('Fin de pulsación bro')}
        // Detecta una Pulsacion prolongada 
        onLongPress={() => setMensaje('Pulsación prolongada bro, ya tardaste')}
        // Deshabilita la interaccion cuando es "true"
        disabled={false}
        // Permite cambiar la apariencia del boton 
        style={({ pressed }) => [
          styles.boton,
          pressed && styles.botonPresionado
        ]}
      >
        <Text style={styles.textoBoton}>Presióname</Text>
      </Pressable>

      <View style={styles.separador} />

      <Text style={styles.titulo}>Switch</Text>

      <Text>
        Estado: {activado ? 'Activado' : 'Desactivado'}
      </Text>

      <Switch
      // Indica si esta activado o desactivado22
        value={activado}
        // Detecta el cambio y actualiza el Estado 
        onValueChange={setActivado}
        // Deshabilita la interaccion cuando es "true"
        disabled={false}
        // Cambia el color del interruptor dependiendo del estado
        trackColor={{ false: '#999999', true: '#319b80' }}
        // Cambia el color del circulo movil 
        thumbColor={activado ? '#ffffff' : '#eeeeee'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  boton: {
    backgroundColor: '#319b80',
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  botonPresionado: {
    backgroundColor: '#1e6655',
  },
  textoBoton: {
    color: 'white',
    fontSize: 16,
  },
  separador: { 
    height: 2,
    backgroundColor: '#cccccc',
    width: '90%',
    marginVertical: 35,
  },
});