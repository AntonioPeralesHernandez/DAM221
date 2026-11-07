
import { useState } from 'react';
import { View, Text, TextInput, Pressable, FlatList, ImageBackground, ActivityIndicator, Alert } from 'react-native';

export default function RegisLibLeidosScreen(){

    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');
    const [libros, setLibros] = useState([]);
    const [cargando, setCargando] = useState(false);

    const agregarLibro = ()=>{

        if(!titulo.trim() || !autor.trim() || !genero.trim()){
            Alert.alert('Error bro','Debes completar todos los campos, no seas huevon bro');
            return;
        }

        setCargando(true);

        setTimeout(()=>{
            const nuevoLibro = {
                id: Date.now().toString(),
                titulo,
                autor,
                genero
            };

            setLibros((anterior) => [...anterior, nuevoLibro]);

            setTitulo('');
            setAutor('');
            setGenero('');
            setCargando(false);

            Alert.alert('Todo un exitoso bro','Libro agregado correctamente');

        }, 4000);
    };

    return(
        <ImageBackground
            source={require('../assets/fondo.jpeg')}
            style={{flex:1}}>

            <View style={{flex:1, padding:20}}>

                <Text style={{
                    fontSize:24,
                    color:'#0f0f0f',
                    textAlign:'center',
                    margin:20
                }}> Catalogo de Libros del Bro Antonio </Text>

                <TextInput
                    placeholder='Aquí va el titulo del libro bro'
                    value={titulo}
                    onChangeText={setTitulo}
                    style={{backgroundColor:'white', padding:12, marginBottom:10}}/>

                <TextInput
                    placeholder="Autor"
                    value={autor}
                    onChangeText={setAutor}
                    style={{backgroundColor:'white', padding:12, marginBottom:10}}/>

                <TextInput
                    placeholder="Género"
                    value={genero}
                    onChangeText={setGenero}
                    style={{backgroundColor:'white', padding:12, marginBottom:10}}/>

                <Pressable
                    onPress={agregarLibro}
                    disabled={cargando}
                    style={{backgroundColor:'#2eb18a', padding:15}}>
                    <Text style={{color:'white', textAlign:'center'}}> Agregar Libro </Text>
                </Pressable>

                {cargando && (
                    <View style={{margin:15}}>
                        <ActivityIndicator size="large" color="white"/>
                        <Text style={{color:'white', textAlign:'center'}}> Guardando bro </Text>
                    </View>
                )}

                <Text style={{color:'white', marginVertical:15}}> Total de libros del bro: {libros.length} </Text>

                <FlatList
                    data={libros}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <View style={{backgroundColor:'white', padding:12, marginBottom:10}}>
                            <Text style={{fontWeight:'bold'}}>{item.titulo}</Text>
                            <Text>Autor: {item.autor}</Text>
                            <Text>Género: {item.genero}</Text>
                        </View>
                    )}
                />
            </View>
        </ImageBackground>
    );
}
