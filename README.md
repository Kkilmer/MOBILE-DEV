# MOBILE-D (React-Native)

# Projeto desenvolvido durante aula e em casa (ETAPA 1)

## Com base nos Slide 1 - prática, segue anexos de Atividades 1:

- Código Exercicio01:

```
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
```

---

- Visualização do APP.jsx:

```
import { View, Text } from 'react-native'
import React from 'react'
import Exercicio01 from './src/components/Exercicio01'

const App = () => {
  return (
    <Exercicio01 name="Kevin Kilmer"/>
  )
}

export default App
```

---

- Resolução da Atividade:

Img: <img width="1903" height="1071" alt="Captura de imagem_20250903_221841" src="https://github.com/user-attachments/assets/e9ff46f2-1262-4af4-b73f-6ca3c3634ab0" />

## Com base nos Slide 1 - prática, segue anexos de Atividades 2:

- Código Exercicio02:

```
import { View, Text, StyleSheet, Button } from 'react-native'
import { useState } from 'react'
import React from 'react'

const Exercicio02 = () => {

    const [contador, setContador] = useState(0)

    function incrementar() {
        setContador(contador+1)
    }

    function decrementar() {
        setContador(contador-1)
    }

  return (
    <View style={styles.container}>
      <Button title="incrementar" onPress={incrementar} />
      <Button title="decrementar" onPress={decrementar} />

      <Text>O contador está em: {contador}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 100
    }
})

export default Exercicio02
```

---

- Visualização do APP.jsx:

```
import { View, Text } from 'react-native'
import React from 'react'
import Exercicio02 from './src/components/Exercicio02'

const App = () => {
  return (
    <View>
      <Exercicio02 />
    </View>
  )
}

export default App
```

---

- Resolução da Atividade:

Img (Incrementando): <img width="1903" height="1071" alt="Captura de imagem_20250903_222613" src="https://github.com/user-attachments/assets/0ac61c4f-bb83-45a2-9d09-bc0073138298" />


Img (Decrementando): <img width="1895" height="1068" alt="Captura de imagem_20250903_222652" src="https://github.com/user-attachments/assets/674d5d9e-659b-4ee7-89af-217a68527803" />

## Com base nos Slide 1 - prática, segue anexos de Atividades 3:

Esse código cria um campo de texto controlado, ou seja, tudo o que o usuário digita é guardado no state (text) e exibido em tempo real na tela.

- Código Exercicio03:

```
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
```

---

- Visualização do APP.jsx:

```
import { View, Text } from 'react-native'
import React from 'react'
import Exercicio03 from './src/components/Exercicio03'

const App = () => {
  return (
    <Exercicio03/>
  )
}

export default App
```

---

- Resolução da Atividade:

Img Web: <img width="1915" height="1072" alt="Captura de imagem_20250910_145838" src="https://github.com/user-attachments/assets/280ccc56-52ec-45d1-a961-4e3cb7125eaf" />

Img Expo: <img width="1897" height="1064" alt="image" src="https://github.com/user-attachments/assets/355b07ac-f00e-47ba-9355-d07efa09b1e7" />

## Com base nos Slide 1 - prática, segue anexos de Atividades 4:

Nessa atividade estamos renderizando a lista dinamicamente com o "`.map()`".

- Código Exercicio04:

```
import { View, Text } from 'react-native'
import React from 'react'

const Exercicio4 = () => {
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <View>
      {items.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  )
}

export default Exercicio4
```

---

- Visualização do APP.jsx:

```
import { View, Text } from 'react-native'
import React from 'react'
import Exercicio04 from './src/components/Exercicio04'

const App = () => {
  return (
    <Exercicio04/>
  )
}

export default App
```

---

- Resolução da Atividade:

Img Web: <img width="1900" height="1080" alt="Captura de imagem_20250910_142323" src="https://github.com/user-attachments/assets/9ba0bad9-5476-4783-a43c-347540f72e1b" />

Img Expo: <img width="1897" height="1064" alt="image" src="https://github.com/user-attachments/assets/9caed496-88f8-4cef-b95d-2b55200d8c90" />

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
