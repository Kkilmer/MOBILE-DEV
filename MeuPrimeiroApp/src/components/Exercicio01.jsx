import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Exercicio01 = ({name}) => {
  return (
    <View style= {styles.container}>
        <Text>Olá, {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 100
    }
})

export default Exercicio01