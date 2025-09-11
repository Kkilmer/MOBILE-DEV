# MOBILE-DEV (React-Native)

# Projeto desenvolvido durante aula e em casa (ETAPA 2)

Estamos usando o react-native e Flexbox, com alguns caracter novos para estilizar o código.

Caracteres importantes no código:

`Flex: 1` -> representa o container principal para ocupar o espaço da tela.
`header`, `content` e `footer` -> tem algumas semelhanças de fundo, forma de centralizar na vertical e horizontal.
`flex: 3` -> ocupa entre os 3 a cima um espaçamento maior, por ser o conteúdo central.

Cada área cresce ou encolhe de acordo com o tamanho da tela, tornando o layout responsivo.

```
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const LayoutResponsivo = () => {
  return (
    <View style={styles.container}>

        <View style={styles.header}>
            <Text>Cabeçalho</Text>
        </View>

        <View style={styles.content}>
            <Text>Conteúdo Principal</Text>
        </View>

        <View style={styles.footer}>
            <Text>Rodapé</Text>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container:{flex: 1},

    header:{flex: 1, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center'},

    content: {flex: 3, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'},

    footer:{flex: 1, backgroundColor: 'lightcoral', justifyContent: 'center', alignItems: 'center'},
})

export default LayoutResponsivo
```

---

- Visualização do APP.jsx:

```
import { View, Text } from 'react-native'
import React from 'react'
import LayoutResponsivo from './src/components/LayoutResponsivo'

const App = () => {
  return (
    <View style={{flex: 1}}>
      <LayoutResponsivo />
    </View>
  )
}

export default App
```

Img Web: <img width="1915" height="1072" alt="image" src="https://github.com/user-attachments/assets/a49877d4-adfc-435c-8a24-2ddbd0abbbab" />

Img Expo: <img width="1915" height="1072" alt="image" src="https://github.com/user-attachments/assets/ea948cf7-e788-448f-89a3-6438a082b05b" />

