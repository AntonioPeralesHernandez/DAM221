//1. Zona de importaciones
import { StyleSheet, View,} from 'react-native';
import MenuScreen from './screens/MenuScreen';

//2. Zona Render o Main 
export default function App() {
  return (
    <View style={styles.container}>
      <MenuScreen />
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
