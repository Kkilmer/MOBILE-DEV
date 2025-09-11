import { View, Text, StyleSheet, TextInput } from 'react-native'
import { useState } from 'react';
import React from 'react'

const Exercicio03 = () => {
    const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Escreva o que você está pensando..."
      />
      <Text>Você pensou: {text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 100
    },
  });

export default Exercicio03