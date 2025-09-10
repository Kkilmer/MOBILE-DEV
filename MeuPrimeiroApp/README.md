## MOBILE-DEV (React-Native)

# Projeto desenvolvido durante aula e em casa.

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

Img pelo Emulador Android (npx expo start): <img width="1911" height="1078" alt="Captura de imagem_20250904_095224" src="https://github.com/user-attachments/assets/7bb62167-b0be-43b4-8e40-5ace3e4803c3" />


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

Img pelo Emulador Android (npx expo start): <img width="1911" height="1078" alt="Captura de imagem_20250904_094059" src="https://github.com/user-attachments/assets/b0face94-24b5-4e97-9a84-f89409d6f5eb" />

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

Img Web: <img width="1890" height="1079" alt="Captura de imagem_20250910_130752" src="https://github.com/user-attachments/assets/c210a3d7-c621-4fd2-8efd-42ae3535ba76" />

Img Android: <img width="1890" height="1079" alt="Captura de imagem_20250910_131241" src="https://github.com/user-attachments/assets/9a7e0b40-0726-4307-9989-f879f02a145a" />

