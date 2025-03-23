<template>
  <div class="container">
    <img :src="logo" alt="Logo" class="logo" />
    <h1 class="page-title">Lista de Colaboradores</h1>
    <div class="search-container">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Pesquisar por nome"
        class="search-bar"
      />
      <font-awesome-icon icon="search" class="search-icon" />
    </div>
    <div class="table-container">
      <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th @click="sortBy('id')">Código</th>
            <th @click="sortBy('nome_completo')">Nome</th>
            <th @click="sortBy('data_nascimento')">Data de Nascimento</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="filteredColaboradores.length === 0">
            <td colspan="4">Sua consulta não obteve resultados</td>
          </tr>
          <tr v-for="colaborador in filteredColaboradores " :key="colaborador.id">
            <td>{{ colaborador.id }}</td>
            <td>{{ colaborador.nome_completo }}</td>
            <td>{{ formatDate(colaborador.data_nascimento) }}</td>
            <td>
              <BaseButton :to="`/visualizar/${colaborador.id}`" type="visualizar">
                Visualizar
              </BaseButton>
              <BaseButton :to="`/editar/${colaborador.id}`" type="editar">
                Editar
              </BaseButton>
              <BaseButton @click="excluir(colaborador)" type="excluir">
                Excluir
              </BaseButton>
            </td>
          </tr>
          <tr v-for="i in emptyRows" :key="'empty-' + i">
            <td colspan="4">&nbsp;</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  </div>
</template>

<script setup>
import { useIndex } from '~/composables/useIndex'
import BaseButton from '~/components/BaseButton.vue'
import logo from '~/assets/imagens/logo.png'

const { colaboradores, editar, excluir, sortedColaboradores, sortBy, formatDate, searchQuery, filteredColaboradores, emptyRows } = useIndex()
</script>
