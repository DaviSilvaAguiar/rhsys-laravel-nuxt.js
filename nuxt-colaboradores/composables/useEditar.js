import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router' // Importe useRouter
import axios from 'axios'

export function useEditar() {
  const route = useRoute()
  const router = useRouter() // Defina o router
  const colaborador = ref({})

  const carregarColaborador = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/colaboradores/${route.params.id}`)
      colaborador.value = response.data
    } catch (error) {
      console.error('Erro ao carregar colaborador:', error)
    }
  }

  const salvar = async () => {
    try {
      if (route.params.modo === 'editar') {
        await axios.put(`http://127.0.0.1:8000/api/colaboradores/${colaborador.value.id}`, colaborador.value)
      } else {
        await axios.post('http://127.0.0.1:8000/api/colaboradores', colaborador.value)
      }
      router.push('/') // Redirecionar para a lista
    } catch (error) {
      console.error('Erro ao salvar colaborador:', error)
    }
  }

  const cpfInvalido = ref(false)

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
  }

  // Apenas números são permitidos
  const permitirSomenteNumeros = (event) => {
    const charCode = event.charCode ? event.charCode : event.keyCode
    if (charCode < 48 || charCode > 57) {
      event.preventDefault()
    }
  }

  // Cancelar edição
  const cancelar = () => {
    router.push('/') // Redirecionar para a lista
  }

  onMounted(() => {
    carregarColaborador()
  })

  return {
    colaborador,
    salvar,
    cancelar,
    permitirSomenteNumeros,
    cpfInvalido,
    formatarCpf
  }
}