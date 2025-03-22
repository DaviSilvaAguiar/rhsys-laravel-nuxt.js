import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'


export function useVisualizar(){
const route = useRoute()
const colaborador = ref({})

const carregarColaborador = async () => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/colaboradores/${route.params.id}`)
    colaborador.value = response.data
  } catch (error) {
    console.error('Erro ao carregar colaborador:', error)
  }
}
 
onMounted(() => {
  carregarColaborador()
})
  return {
    colaborador
  }
}
