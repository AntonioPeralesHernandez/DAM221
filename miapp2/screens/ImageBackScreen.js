//1. Zona de importaciones
import { StyleSheet, View, Text} from 'react-native';


//2. Zona Render o Main 
export default function ImageBackScreen() {
  return (
    <View style={styles.container}>
      
      <Text>Practica 10</Text>
      <Text>Diego o Saul</Text>


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
  }
});
