<template>
  <div class= "container">
    <h1>Lista de Colaboradores</h1>
    <table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Nome</th>
          <th>Data de Nascimento</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="colaborador in colaboradores" :key="colaborador.id">
          <td>{{ colaborador.id }}</td>
          <td>{{ colaborador.nome_completo }}</td>
          <td>{{ colaborador.data_nascimento }}</td>
          <td>
            <BaseButton :to="`/visualizar/${colaborador.id}`" type="visualizar">
              Visualizar
            </BaseButton>
            <BaseButton @click="editar(colaborador)" type="editar">
              Editar
            </BaseButton>
            <BaseButton @click="excluir(colaborador)" type="excluir">
              Excluir
            </BaseButton>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useIndex } from '~/composables/useIndex'
import BaseButton from '~/components/BaseButton.vue'

const { colaboradores, editar, excluir } = useIndex()
</script>
