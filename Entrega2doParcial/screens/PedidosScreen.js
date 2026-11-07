import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Encabezado, BotonInicio } from '../components/Elementos';

const pedidos = [
  {
    id: 1,
    usuario: 'María Gómez',
    curso: 'Marketing Empresarial',
    puntos: 2,
    estado: 'Pendiente'
  },
  {
    id: 2,
    usuario: 'Carlos Ruiz',
    curso: 'Diseño Gráfico',
    puntos: 3,
    estado: 'Aceptado'
  },
  {
    id: 3,
    usuario: 'Ana López',
    curso: 'Programación Web',
    puntos: 4,
    estado: 'Finalizado'
  }
];

export default function PedidosScreen() {
  return (
    <View style={styles.container}>
      <Encabezado titulo="Pedidos e intercambios" />

      <ScrollView contentContainerStyle={styles.contenido}>

        <Text style={styles.titulo}>Resumen de actividad</Text>

        <View style={styles.resumen}>
          <View style={styles.dato}>
            <Text style={styles.numero}>3</Text>
            <Text style={styles.etiqueta}>Pedidos</Text>
          </View>

          <View style={styles.dato}>
            <Text style={styles.numero}>1</Text>
            <Text style={styles.etiqueta}>Pendientes</Text>
          </View>

          <View style={styles.dato}>
            <Text style={styles.numero}>9</Text>
            <Text style={styles.etiqueta}>Puntos</Text>
          </View>
        </View>

        <Text style={styles.titulo}>Solicitudes registradas</Text>

        {pedidos.map((pedido) => (
          <View style={styles.card} key={pedido.id}>
            <Text style={styles.nombre}>{pedido.curso}</Text>

            <Text style={styles.texto}>
              Usuario: {pedido.usuario}
            </Text>

            <Text style={styles.texto}>
              Puntos del intercambio: {pedido.puntos}
            </Text>

            <View style={styles.pie}>
              <Text style={styles.estado}>{pedido.estado}</Text>
              <Text style={styles.folio}>
                Pedido #{pedido.id}
              </Text>
            </View>
          </View>
        ))}

        <Text style={styles.nota}>
          Los pedidos representan solicitudes de intercambio
          entre los usuarios de la plataforma.
        </Text>

      </ScrollView>

      <BotonInicio />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2EDF5'
  },
  contenido: {
    padding: 18
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#70158A',
    marginBottom: 13,
    marginTop: 8
  },
  resumen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  dato: {
    backgroundColor: '#FFFFFF',
    width: '31%',
    padding: 13,
    borderRadius: 10,
    alignItems: 'center'
  },
  numero: {
    color: '#70158A',
    fontSize: 23,
    fontWeight: 'bold'
  },
  etiqueta: {
    color: '#555555',
    fontSize: 12,
    marginTop: 5
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12
  },
  nombre: {
    color: '#70158A',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  texto: {
    color: '#555555',
    marginBottom: 5
  },
  pie: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  estado: {
    color: '#269B68',
    fontWeight: 'bold'
  },
  folio: {
    color: '#777777',
    fontSize: 12
  },
  nota: {
    color: '#777777',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 15
  }
});