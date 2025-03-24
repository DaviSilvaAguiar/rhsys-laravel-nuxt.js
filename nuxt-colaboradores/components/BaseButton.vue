<template>
  <component :is="tag" v-bind="linkProps" :class="buttonClass">
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { NuxtLink } from '#components' // Garantir que NuxtLink seja importado corretamente

const props = defineProps({
  to: { type: String, default: null }, // Rota do link
  type: { type: String, default: 'default' } // Tipo do botão: 'visualizar', 'editar', 'excluir', 'cancelar', 'limpar', 'cadastrar'
})

const tag = computed(() => (props.to ? NuxtLink : 'button')) // Se tiver o `to`, vai ser um NuxtLink, senão um botão

// Definindo a classe de acordo com o tipo do botão
const buttonClass = computed(() => {
  switch (props.type) {
    case 'visualizar':
    case 'editar':
    case 'cadastrar':
    case 'submit':
      return 'btn btn-blue'
    case 'excluir':
    case 'cancelar':
    case 'limpar':
      return 'btn btn-red'
    default:
      return 'btn btn-default'
  }
})

const linkProps = computed(() => (props.to ? { to: props.to } : {})) // Atributos de link
</script>

<style scoped>
/* Estilo base para o botão */
.btn {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;
  border: 1px solid transparent;
  margin-right: 0.5rem; 
}

/* Estilo específico para o botão Visualizar, Editar, Limpar e Cadastrar (Azul Médio) */
.btn-blue {
  background-color: #227C9D; /* Azul Médio */
  color: white;
}

.btn-blue:hover {
  background-color: #1B3A4B; /* Azul-Marinho */
}

/* Estilo específico para o botão Excluir e Cancelar (Laranja Suave) */
.btn-red {
  background-color: #FF9F1C; /* Laranja Suave */
  color: white;
}

.btn-red:hover {
  background-color: #CC7A00; /* Laranja mais escuro */
}

/* Estilo para o botão padrão */
.btn-default {
  background-color: #A3BAC3; /* Cinza Azul */
  color: #1B3A4B; /* Azul-Marinho */
}

.btn-default:hover {
  background-color: #8A9EA8; /* Cinza Azul mais escuro */
}
</style>