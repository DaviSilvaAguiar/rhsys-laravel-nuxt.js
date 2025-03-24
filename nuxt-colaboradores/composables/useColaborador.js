import { ref, onMounted, watch } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'

export function useColaborador() {
  const router = useRouter()
  const route = useRoute()

  const modo = ref(route.params.modo)
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

  const cpfInvalido = ref(false)
  const loading = ref(false)
  const error = ref(null)

  // Carregar dados para edição
  const carregarColaborador = async () => {
    loading.value = true
    error.value = null
    try {
      if (modo.value === 'editar') {
        const response = await axios.get(`http://127.0.0.1:8000/api/colaboradores/${route.params.id}`)
        colaborador.value = response.data
      }
    } catch (err) {
      error.value = 'Erro ao carregar colaborador.'
    } finally {
      loading.value = false
    }
  }
  
  const salvar = async () => {
    loading.value = true
    error.value = null
    try {
      if (modo.value === 'editar') {
        await axios.put(`http://127.0.0.1:8000/api/colaboradores/${colaborador.value.id}`, colaborador.value)
      } else {
        await axios.post('http://127.0.0.1:8000/api/colaboradores', colaborador.value)
      }
      router.push('/') // Redirecionar para a lista
    } catch (err) {
      error.value = 'Erro ao salvar colaborador.'
    } finally {
      loading.value = false
    }
  }

  // Limpar o formulário
  const limpar = () => {
    colaborador.value = {
      id: null,
      nome_completo: '',
      apelido: '',
      nome_pai: '',
      nome_mae: '',
      cpf: '',
      data_nascimento: '',
      cargo: ''
    }
  }

  // Formatar o CPF
  const formatarCpf = () => {
    let cpf = colaborador.value.cpf.replace(/\D/g, '').slice(0, 11) // Remover caracteres não numéricos e limitar a 11 dígitos

    // Formatar CPF para 'xxx.xxx.xxx-xx'
    if (cpf.length <= 3) {
      colaborador.value.cpf = cpf
    } else if (cpf.length <= 6) {
      colaborador.value.cpf = cpf.replace(/(\d{3})(\d{0,3})/, '$1.$2')
    } else if (cpf.length <= 9) {
      colaborador.value.cpf = cpf.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3')
    } else {
      colaborador.value.cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4')
    }

    // Validação: CPF deve ter exatamente 11 números
    cpfInvalido.value = cpf.length !== 11
    console.log('CPF:', cpf, 'CPF Inválido:', cpfInvalido.value) // Debugging
  }
  
  // Apenas letras e espaços são permitidos
  const permitirSomenteLetras = (event) => {
    const charCode = event.charCode ? event.charCode : event.keyCode
    if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122) && charCode !== 32) {
      event.preventDefault()
    }
  }

  // Apenas números são permitidos
  const permitirSomenteNumeros = (event) => {
    const charCode = event.charCode ? event.charCode : event.keyCode
    if (charCode < 48 || charCode > 57) {
      event.preventDefault()
    }
  }

  // Cancelar cadastro
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
    cancelar,
    permitirSomenteNumeros,
    permitirSomenteLetras,
    formatarCpf,
    cpfInvalido, 
    modo,
    loading,
    error
  }
}