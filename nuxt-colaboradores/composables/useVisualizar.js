import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

export function useVisualizar() {
  const route = useRoute()
  const router = useRouter()  

  const colaborador = ref({})

  const carregarColaborador = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/colaboradores/${route.params.id}`)
      colaborador.value = response.data
    } catch (error) {
      console.error('Erro ao carregar colaborador:', error)
    }
  }

// Função para voltar à home
const voltar = () => {
  router.push('/').then(() => {
    window.location.reload();  // Força um recarregamento da página
  });
}

  onMounted(() => {
    carregarColaborador();
  });
  return {
    colaborador, voltar
    }
}
