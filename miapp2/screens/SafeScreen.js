//1. Zona de importaciones
import { StyleSheet, View, Text, ScrollView,SafeAreaView} from 'react-native';


//2. Zona Render o Main 
export default function SafeScreen() {
  const canciones=[
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  ];

  return (
    <SafeAreaView
    style={styles.container}>

    <Text style={styles.titulo}>MUSICA</Text>

    <View
    style={styles.reproductor}>
      <Text style={styles.texto}>Lista de musica</Text>
      <Text>La musica mas escuchada</Text>
    </View>

    <Text style={styles.subtitulo}>Canciones Disponibles</Text>

    <ScrollView style={styles.lista}
    contentContainerStyle={styles.contenidoLista}
    showsHorizontalScrollIndicator={true}
    
    
    >
      {canciones.map((item,index) =>(
        <View key ={index} 
        style={styles.tarjeta}>

        <Text 
        syles={styles.textoLista}>{item}</Text>

        </View>
      ))}
      
    </ScrollView>

    </SafeAreaView>
  );
}

//3. Zona de estilos y posisionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6dd8f3',
    padding: 20,
  },
  titulo:{
    fontSize:26,
    fontWeight:'bold',
    textAlign: 'center',
    marginBotton:20,
  },
  reproductor:{
    backgroundColor:'white',
    padding:20,
    borderRadius: 15,
    alignItems:'center'
  },
  texto:{
    fontSize:22,
    fontWeight:'bold',
    marginBottom:10,
  },
  subtitulo:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:20,
    marginBottom:10,
    textAlign:'center',
  },
  lista:{
    flex:1,
  },
  tarjeta:{
    backgroundColor:'#5570c9',
    padding:20,
    marginBottom:10,
    borderRadius:15,
  },
  textoLista:{
    fontSize:18,
    textAlign: 'center',
  },
});
