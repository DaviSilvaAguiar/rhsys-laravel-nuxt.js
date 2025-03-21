<template>
  <div>
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
            <button @click="visualizar(colaborador)">Visualizar</button>
            <button @click="editar(colaborador)">Editar</button>
            <button @click="excluir(colaborador)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useIndex } from '~/composables/useIndex'

const { colaboradores, visualizar, editar, excluir } = useIndex()
</script>
