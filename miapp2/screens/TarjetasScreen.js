//1. Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,} from 'react-native';
import {Perfil} from '../components/Perfil';

//2. Zona Render o Main 
export default function TarjetasScreen() {
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
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tarjetas1:{backgroundColor: '#676faf'},
  tarjetas2:{backgroundColor: '#6eaf9c'},
  tarjetas3:{backgroundColor: '#d66860'},
});