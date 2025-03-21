<template>
  <div>
    <h1>{{ modo === 'editar' ? 'Editar' : 'Cadastrar' }} Colaborador</h1>
    <form @submit.prevent="salvar">
      <div>
        <label for="nome">Nome Completo</label>
        <input type="text" v-model="colaborador.nome_completo" :disabled="modo === 'visualizar'" required />
      </div>
      <div>
        <label for="apelido">Apelido</label>
        <input type="text" v-model="colaborador.apelido" :disabled="modo === 'visualizar'" required />
      </div>
      <div>
        <label for="nome_pai">Nome do Pai</label>
        <input type="text" v-model="colaborador.nome_pai" :disabled="modo === 'visualizar'" />
      </div>
      <div>
        <label for="nome_mae">Nome da Mãe</label>
        <input type="text" v-model="colaborador.nome_mae" :disabled="modo === 'visualizar'" />
      </div>
      <div>
        <label for="cpf">CPF</label>
        <input type="text" v-model="colaborador.cpf" :disabled="modo === 'visualizar'" required />
      </div>
      <div>
        <label for="data_nascimento">Data de Nascimento</label>
        <input type="date" v-model="colaborador.data_nascimento" :disabled="modo === 'visualizar'" required />
      </div>
      <div>
        <label for="cargo">Cargo</label>
        <input type="text" v-model="colaborador.cargo" :disabled="modo === 'visualizar'" required />
      </div>
      <div>
        <button type="submit">{{ modo === 'editar' ? 'Salvar' : 'Cadastrar' }}</button>
        <button type="button" @click="limpar">Limpar</button>
        <button type="button" @click="cancelar">Cancelar</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useColaborador } from '~/composables/useColaborador'

const route = useRoute()
const modo = route.params.modo

const { colaborador, salvar, limpar, cancelar } = useColaborador()
</script>