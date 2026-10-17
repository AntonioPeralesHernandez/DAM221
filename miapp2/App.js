//1. Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import {Saludo} from './components/Saludo';
import {Saludo2} from './components/Saludo2';
import {Perfil} from './components/Perfil';

//2. Zona Render o Main 
export default function App() {
  return (
    <View style={styles.container}>
      
      <Perfil nombre="Antonio" carrera="ITIID" materia="DAM" cuatri="4"/>
      <Perfil nombre="Diego" carrera="ITIID" materia="DAM" cuatri="4"/>
      <Perfil nombre="Damian" carrera="ITIID" materia="DAM" cuatri="4"/>
      
      <StatusBar style="auto" />
    </View>
  );
}

//3. Zona de estilos y posisionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
