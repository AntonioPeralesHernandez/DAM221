
// Zona Importaciones
import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import RegisLibLeidosScreen from './screens/RegisLibLeidosScreen';

export default function App() {

  const [inicio, setInicio] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setInicio(false);
    }, 2000);
  }, []);

  if (inicio) {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Registro de Libros del Bro Antonio</Text>
      </View>
    );
  }

  return <RegisLibLeidosScreen />;
}
