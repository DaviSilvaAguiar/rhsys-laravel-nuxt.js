import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'

export function useColaborador() {
  const router = useRouter()
  const route = useRoute()

  const modo = route.params.modo
  const colaborador = ref({
    id: null,
    nome_completo: '',
    apelido: '',
    nome_pai: '',
    nome_mae: '',
    cpf: '',
    data_nascimento: '',
    cargo: ''
  })

  // Carregar dados para edição
  const carregarColaborador = async () => {
    if (modo !== 'novo') {
      const response = await axios.get(`http://localhost:8000/api/colaboradores/${route.params.id}`)
      colaborador.value = response.data
    }
  }

  // Salvar ou atualizar dados
  const salvar = async () => {
    if (modo === 'editar') {
      await axios.put(`http://localhost:8000/api/colaboradores/${colaborador.value.id}`, colaborador.value)
    } else {
      await axios.post('http://localhost:8000/api/colaboradores', colaborador.value)
    }
    router.push('/')  // Redirecionar para a lista
  }

  // Limpar o formulário
  const limpar = () => {
    colaborador.value = {
      codigo: '',
      nome_completo: '',
      apelido: '',
      nome_pai: '',
      nome_mae: '',
      cpf: '',
      data_nascimento: '',
      cargo: ''
    }
  }

  // Cancelar edição
  const cancelar = () => {
    router.push('/')
  }

  // Carregar dados na inicialização
  onMounted(() => {
    carregarColaborador()
  })

  return {
    colaborador,
    salvar,
    limpar,
    cancelar
  }
}