<template>
  <div class="container colaborador-container">
    <img :src="logo" alt="Logo" class="logo" />
    <h1 class="page-title">Visualizar Colaborador</h1>
    <div class="box">
      <form>
        <div class="form-row">
          <div class="form-group">
            <label for="codigo">Código</label>
            <input type="text" v-model="colaborador.id" disabled />
          </div>
          <div class="form-group">
            <label for="nome">Nome Completo</label>
            <input type="text" v-model="colaborador.nome_completo" disabled />
          </div>
          <div class="form-group">
            <label for="apelido">Apelido</label>
            <input type="text" v-model="colaborador.apelido" disabled />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="nome_pai">Nome do Pai</label>
            <input type="text" v-model="colaborador.nome_pai" disabled />
          </div>
          <div class="form-group">
            <label for="nome_mae">Nome da Mãe</label>
            <input type="text" v-model="colaborador.nome_mae" disabled />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="cpf">CPF</label>
            <input type="text" v-model="colaborador.cpf" disabled />
          </div>
          <div class="form-group">
            <label for="data_nascimento">Data de Nascimento</label>
            <input type="date" v-model="colaborador.data_nascimento" disabled />
          </div>
        </div>
        <div class="form-group">
          <label for="cargo">Cargo</label>
          <input type="text" v-model="colaborador.cargo" disabled />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useVisualizar } from '~/composables/useVisualizar'
import logo from '~/assets/imagens/logo.png'


const { colaborador } = useVisualizar()
</script>