<template>
  <div>
    <h1>Visualizar Colaborador</h1>
    <form>
      <div>
        <label for="codigo">Código</label>
        <input type="text" v-model="colaborador.id" disabled />
      </div>
      <div>
        <label for="nome">Nome Completo</label>
        <input type="text" v-model="colaborador.nome_completo" disabled />
      </div>
      <div>
        <label for="apelido">Apelido</label>
        <input type="text" v-model="colaborador.apelido" disabled />
      </div>
      <div>
        <label for="nome_pai">Nome do Pai</label>
        <input type="text" v-model="colaborador.nome_pai" disabled />
      </div>
      <div>
        <label for="nome_mae">Nome da Mãe</label>
        <input type="text" v-model="colaborador.nome_mae" disabled />
      </div>
      <div>
        <label for="cpf">CPF</label>
        <input type="text" v-model="colaborador.cpf" disabled />
      </div>
      <div>
        <label for="data_nascimento">Data de Nascimento</label>
        <input type="date" v-model="colaborador.data_nascimento" disabled />
      </div>
      <div>
        <label for="cargo">Cargo</label>
        <input type="text" v-model="colaborador.cargo" disabled />
      </div>
    </form>
  </div>
</template>

<script setup>
import { useVisualizar } from '~/composables/useVisualizar'

const { colaborador } = useVisualizar()
</script>