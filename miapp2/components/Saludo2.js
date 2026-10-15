import {Text, Image, Button, View} from 'react-native';

export const Saludo2 =()=>{
  return(

    <View>
    <Text> Hola React Native: Soy un componente propio compuesto </Text> 
    <Image source={require('../assets/wave.png')} />
    <Button title ="Presionara para saludar"/>
    </View>
  )
}