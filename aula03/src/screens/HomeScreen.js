import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { db } from '../config/firebaseConfig'
import React,{ useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'

const HomeScreen = ({ navigation }) => {

  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'cursos'));
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setCourses(data);
      } catch (error) {
        console.error('Erro ao buscar cursos no Firestore', error);
        setError('Não foi possível carregar os cursos. Tente novamente.' + error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCourses();
  }, []);

  const items = [
    { id: '1', name: 'Curso de React Native', description: 'Aprenda a criar apps para Android e iOS' },
    { id: '2', name: 'Curso de Java Spring Boot', description: 'Construa APIs robustas com Java e Spring' },
    { id: '3', name: 'Curso de AWS', description: 'Adomine os serviços da AWS' },
    { id: '4', name: 'Curso de Python para Data Science', description: 'Análise dados com Python' }
  ] 

  const goToDetailsScreen = (course) => {
    // Navegar para a DetailsScreen com os detalhes do item
    navigation.navigate('Details', {course})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 Cursos Disponíveis</Text>
      <FlatList
      data={courses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.itemContainer} onPress={ () => goToDetailsScreen(item)}> 
          <Text style={styles.itemTitle}>{item.name}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
        </TouchableOpacity>
      )
    }
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  itemContainer: { backgroundColor: '#fff', padding: 15, marginBottom: 10, borderRadius: 8, elevation: 2 },
  itemTitle: { fontSize: 18, fontWeight: 'bold' },
  itemDescription: { fontSize: 14, color: '#666', marginTop: 5 }
})

export default HomeScreen