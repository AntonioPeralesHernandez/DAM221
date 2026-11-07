import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

import AccesoScreen from './AccesoScreen';
import InicioAdminScreen from './InicioAdminScreen';
import PedidosScreen from './PedidosScreen';
import CursosDisponiblesScreen from './CursosDisponiblesScreen';
import SolicitudScreen from './SolicitudScreen';
import PerfilCursoScreen from './PerfilCursoScreen';
import ClientesScreen from './ClientesScreen';
import CursosAdminScreen from './CursosAdminScreen';
import ReportesScreen from './ReportesScreen';
import ContenidoCursoScreen from './ContenidoCursoScreen';
import ImpartirCursoScreen from './ImpartirCursoScreen';
import PuntosScreen from './PuntosScreen';
import AjustesScreen from './AjustesScreen';
import PerfilUsuarioScreen from './PerfilUsuarioScreen';

export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'acceso': return <AccesoScreen />;
    case 'admin': return <InicioAdminScreen />;
    case 'pedidos': return <PedidosScreen />;
    case 'disponibles': return <CursosDisponiblesScreen />;
    case 'solicitud': return <SolicitudScreen />;
    case 'perfilcurso': return <PerfilCursoScreen />;
    case 'clientes': return <ClientesScreen />;
    case 'cursos': return <CursosAdminScreen />;
    case 'reportes': return <ReportesScreen />;
    case 'contenido': return <ContenidoCursoScreen />;
    case 'impartir': return <ImpartirCursoScreen />;
    case 'puntos': return <PuntosScreen />;
    case 'ajustes': return <AjustesScreen />;
    case 'perfil': return <PerfilUsuarioScreen />;

    default:
      return (
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.titulo}>Banco de Tiempo y Talento</Text>
          <Text style={styles.subtitulo}>Menú de interfaces</Text>

          <Text style={styles.seccion}>Acceso</Text>
          <Button title="Inicio de sesión" onPress={() => setScreen('acceso')} />

          <Text style={styles.seccion}>Administrador</Text>
          <Button title="Inicio Admin" onPress={() => setScreen('admin')} />
          <Button title="Pedidos" onPress={() => setScreen('pedidos')} />
          <Button title="Clientes" onPress={() => setScreen('clientes')} />
          <Button title="Cursos" onPress={() => setScreen('cursos')} />
          <Button title="Reportes" onPress={() => setScreen('reportes')} />
          <Button title="Ajustes" onPress={() => setScreen('ajustes')} />

          <Text style={styles.seccion}>Usuario</Text>
          <Button title="Cursos disponibles" onPress={() => setScreen('disponibles')} />
          <Button title="Solicitud" onPress={() => setScreen('solicitud')} />
          <Button title="Perfil del curso" onPress={() => setScreen('perfilcurso')} />
          <Button title="Contenido del curso" onPress={() => setScreen('contenido')} />
          <Button title="Impartir curso" onPress={() => setScreen('impartir')} />
          <Button title="Puntos" onPress={() => setScreen('puntos')} />
          <Button title="Mi perfil" onPress={() => setScreen('perfil')} />

        </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFF',
    padding: 25,
    justifyContent: 'center',
    gap: 12,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#70158A',
  },
  subtitulo: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  seccion: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#70158A',
  },
});