import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export function useIndex() {
  const router = useRouter()
  const colaboradores = ref([])

  // Carregar a lista de colaboradores
  const carregarColaboradores = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/colaboradores')
    colaboradores.value = response.data
  }

   // Visualizar um colaborador
   const visualizar = (colaborador) => {
    router.push({ path: `/visualizar/${colaborador.id}` })
  }

  // Editar um colaborador
  const editar = (colaborador) => {
    router.push({ name: 'colaborador', params: { id: colaborador.id, modo: 'editar' } })
  }

  // Excluir um colaborador
  const excluir = async (colaborador) => {
    if (confirm('Tem certeza que deseja excluir?')) {
      await axios.delete(`http://127.0.0.1:8000/api/colaboradores/${colaborador.id}`)
      carregarColaboradores()  // Atualizar a lista
    }
  }

  // Carregar dados na inicialização
  onMounted(() => {
    carregarColaboradores()
  })

  return {
    colaboradores,
    carregarColaboradores,
    visualizar,
    editar,
    excluir
  }
}