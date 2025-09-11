import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CartaoApresentacao = () => {
  return (
    <View style={styles.container}>
        {/* IMAGEM DE PERFIL */}
      <Image
        source={{ uri: 'https://avatars.githubusercontent.com/u/143044291?v=4' }}
        style={styles.imagemPerfil}    />

        {/* NOME  e DESCRIÇÃO*/}
      <Text style={styles.nome}>Kevin Kilmer</Text>
      <Text style={styles.descricao}>
        Apaixonado por tecnologia | Desenvolvedor Mobile
      </Text>

        <View style={styles.botoesContainer}>
            {/* BOTOES DE CONTATO */}
            <TouchableOpacity style={[styles.botao, styles.botaoGitHub]}>
                <Text style={styles.textoBotao}>GitHub</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botao, styles.botaoLinkedIn]}>
                <Text style={styles.textoBotao}>LinkedIn</Text>
            </TouchableOpacity>
        </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5
    },
    imagemPerfil: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10
    },
    nome: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333'
    },
    descricao: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginVertical: 10,
    },
    botao: {
        flex: 1,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 5
    },
    botaoGitHub: {
        backgroundColor: '#333',
    },
    botaoLinkedIn: {
        backgroundColor: '#0077B5',
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    botoesContainer: {
        flexDirection: 'row',
        marginTop: 10,
    }

})

export default CartaoApresentacao