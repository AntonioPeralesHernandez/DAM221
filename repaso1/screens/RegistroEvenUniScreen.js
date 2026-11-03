import {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Pressable, Switch, ScrollView, SafeAreaView, Alert} from 'react-native';

export default function RegistroEvenUniScreen(){

    const[nombre, setNombre] = useState('');
    const[carrera, setCarrera] = useState('');
    const[semestre, setSemestre] = useState('');
    const[taller, setTaller] = useState(false);
    const[constancia, setConstancia] = useState(false);
    const[deportes, setDeportes] = useState(false);
    
    const guardarDatos = () => {
        if(
            nombre.trim()===''||
            carrera.trim()===''||
            semestre.trim()===''
        ){
            Alert.alert('Error bro', 'Completa todo bro, no seas flojo');
            return;
        }
        if (/[0-9]/.test(nombre) || /[0-9]/.test(carrera)) {
        Alert.alert('Error', 'No se permiten números en el nombre ni en la carrera, sigue intntando bro.');
        return;
    }
        const numeroSemestre = Number(semestre);
        if(!Number.isInteger(numeroSemestre) || numeroSemestre <= 0){
            Alert.alert('Error bro','Ingresa un semestre numérico porfavor bro');
            return;
        }

        Alert.alert(
            'Registro echo bro',
            'Nombree: ' + nombre +
            '\nCarrera: ' + carrera +
            '\nSemestre: ' + semestre +
            '\nTaller: ' + (taller ? 'Sí' : 'No') +
            '\nConstancia: ' + (constancia ? 'Sí' : 'No') +
            '\nDeportes: ' + (deportes ? 'Sí' : 'No')
        );

    };
    return(
        <SafeAreaView style = {styles.container}>
            <ScrollView contentContainerStyle = {styles.contenido}>

                <Text style = {styles.titulo}>Registro Obligatorio de Evento Universitario</Text>
                <Text style = {styles.subtitulo}>Obligatorio porque es para abracitos</Text>
                <Text style = {styles.subtitulo}>Datos del bro</Text>

                <Text>Nombre</Text>
                <TextInput
                style = {styles.margen}
                placeholder = "Tu nombre aquí bro"
                value = {nombre}
                onChangeText = {setNombre}/>

                <Text>Carrera</Text>
                <TextInput
                style = {styles.margen}
                placeholder = "Tu carrera aquí bro"
                value = {carrera}
                onChangeText = {setCarrera}/>

                <Text>Semestre</Text>
                <TextInput
                style = {styles.margen}
                placeholder = "Tu semestre aquí bro"
                value = {semestre}
                onChangeText = {setSemestre}/>

                <Text style = {styles.subtitulo}>Preguntas extras bro</Text>
                <View style = {styles.fila}>
                    <Text>¿Asistirás al taller?</Text>
                    <Switch 
                    value = {taller}
                    onValueChange = {setTaller}/>
                </View>

                <View style = {styles.fila}>
                    <Text>¿Requieres una constancia?</Text>
                    <Switch
                    value = {constancia}
                    onValueChange = {setConstancia}/>
                </View>

                <View style = {styles.fila}>
                    <Text>¿Participarás en actividades desportivas?</Text>
                    <Switch
                    value = {deportes}
                    onValueChange = {setDeportes}/>
                </View>

                <Pressable style = {styles.boton} onPress = {guardarDatos}>
                    <Text style = {styles.textoBoton}>Enviar</Text>
                </Pressable>

            </ScrollView>
        </SafeAreaView>
    );
};

const  styles =StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffff',
    },
    contenido: {
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#155c50'
    },
    subtitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#29926f',
        marginVertical: 10,
    },
     margen: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#111213',
    padding: 12,
    borderRadius: 8,
    marginTop: 7,
    marginBottom: 15,
  },

  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 13,
    borderRadius: 8,
    marginBottom: 12,
  },

  boton: {
    backgroundColor: '#247e5b',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },

  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 19,
  },

});