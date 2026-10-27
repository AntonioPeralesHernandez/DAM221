//1. Zona de importaciones
import { StyleSheet, View, Text, Button} from 'react-native';
import { useState } from 'react';
import TarjetasScreen from './TarjetasScreen';
import SafeScreen from './SafeScreen';
import ModalScreen from './ModalScreen';
import ActivityScreen from './ActivityScreen';
import FlatListScreen from './FlatListScreen';
import ImageBackScreen from './ImageBackScreen';
import PressableScreen from './PressableScreen';
import TextInputScreen from './TextInputScreen';




//2. Zona Render o Main 
export default function MenuScreen() {
    const[screen, setScreen] = useState('menu');

    switch(screen){
        case 'tarjetas':
            return <TarjetasScreen />;
        case 'safe':
            return <SafeScreen />;
        case 'pressable':
            return <PressableScreen />;
        case 'textinput':
            return <TextInputScreen />;
        case 'flatlist':
            return <FlatListScreen />;
        case 'imageback':
            return <ImageBackScreen />;
        case 'modal':
            return <ModalScreen />;
        case 'activity':
            return <ActivityScreen />;
        
        case 'menu':
            default:
               return (
                 <View style={styles.container}>
                    <Text>Menu de Practicas</Text>
                    <Button title="Pract: Tarjetas" onPress={() => setScreen('tarjetas')} />
                    <Button title="Pract: SafeAreaView" onPress={() => setScreen('safe')} />
                    <Button title="Pract: Pressable" onPress={() => setScreen('pressable')} />
                    <Button title="Pract: TextInput" onPress={() => setScreen('textinput')} />
                    <Button title="Pract: FlatList" onPress={() => setScreen('flatlist')} />
                    <Button title="Pract: ImageBack" onPress={() => setScreen('imageback')} />
                    <Button title="Pract: Modal" onPress={() => setScreen('modal')} />
                    <Button title="Pract:Activity" onPress={() => setScreen('activity')} />
                    
                 </View>
                );
    } //Switch
}//función 

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
