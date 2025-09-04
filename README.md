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


