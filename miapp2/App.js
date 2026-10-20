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
      
      <Perfil style={styles.tarjetas1} nombre="Antonio" carrera="ITIID" materia="DAM" cuatri="4"/>
      <Perfil style={styles.tarjetas2} nombre="Diego" carrera="ITIID" materia="DAM" cuatri="4"/>
      <Perfil style={styles.tarjetas3} nombre="Damian" carrera="ITIID" materia="DAM" cuatri="4"/>
      
      <StatusBar style="auto" />
    </View>
  );
}

//3. Zona de estilos y posisionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  tarjetas1:{backgroundColor: '#676faf'},
  tarjetas2:{backgroundColor: '#6eaf9c'},
  tarjetas3:{backgroundColor: '#d66860'},
});
