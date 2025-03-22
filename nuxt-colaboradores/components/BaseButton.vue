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
  type: { type: String, default: 'default' } // Tipo do botão: 'visualizar', 'editar', 'excluir'
})

const tag = computed(() => (props.to ? NuxtLink : 'button')) // Se tiver o `to`, vai ser um NuxtLink, senão um botão

// Definindo a classe de acordo com o tipo do botão
const buttonClass = computed(() => {
  switch (props.type) {
    case 'visualizar':
      return 'btn btn-blue'
    case 'editar':
      return 'btn btn-blue'
    case 'excluir':
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

/* Estilo específico para o botão Visualizar (Azul) */
.btn-blue {
  background-color: #3490dc;
  color: white;
}

.btn-blue:hover {
  background-color: #2779bd;
}

/* Estilo específico para o botão Excluir (Vermelho) */
.btn-red {
  background-color: #e3342f;
  color: white;
}

.btn-red:hover {
  background-color: #cc1f1a;
}

/* Estilo para o botão padrão */
.btn-default {
  background-color: #e2e8f0;
  color: #2d3748;
}

.btn-default:hover {
  background-color: #cbd5e0;
}
</style>
