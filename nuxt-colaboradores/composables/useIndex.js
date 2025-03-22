import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { format } from 'date-fns'

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

  // Lógica de ordenação
  const sortKey = ref('')
  const sortOrder = ref(1)

  const sortBy = (key) => {
    if (sortKey.value === key) {
      sortOrder.value = -sortOrder.value
    } else {
      sortKey.value = key
      sortOrder.value = 1
    }
  }

  const sortedColaboradores = computed(() => {
    return [...colaboradores.value].sort((a, b) => {
      let result = 0
      if (sortKey.value === 'data_nascimento') {
        result = new Date(a[sortKey.value]) - new Date(b[sortKey.value])
      } else {
        result = a[sortKey.value] > b[sortKey.value] ? 1 : -1
      }
      return result * sortOrder.value
    })
  })

  // Função para formatar datas
  const formatDate = (date) => {
    return format(new Date(date), 'dd/MM/yyyy')
  }

  // Função para barra de pesquisa  
  const searchQuery = ref('')

  const filteredColaboradores = computed(() => {
    if (!searchQuery.value) {
      return sortedColaboradores.value
    }
    return sortedColaboradores.value.filter(colaborador =>
      colaborador.nome_completo.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  })

  // Calcular linhas vazias para preencher a tabela
  const emptyRows = computed(() => {
    const rowsNeeded = 10 - filteredColaboradores.value.length
    return rowsNeeded > 0 ? rowsNeeded : 0
  })

  // Carregar dados na inicialização
  onMounted(() => {
    carregarColaboradores()
  })

  return {
    colaboradores,
    carregarColaboradores,
    visualizar,
    editar,
    excluir, 
    sortedColaboradores,
    sortBy,
    formatDate,
    searchQuery,
    filteredColaboradores,
    emptyRows
  }
}