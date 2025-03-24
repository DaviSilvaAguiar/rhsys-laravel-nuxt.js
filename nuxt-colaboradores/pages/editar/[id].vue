<template>
  <div class="container colaborador-container">
    <img :src="logo" alt="Logo" class="logo" />
    <h1 class="page-title">Editar Colaborador</h1>
    <div class="box">
      <form @submit.prevent="salvar">
        <div v-if="loading" class="loading">Carregando...</div>
        <div v-if="error" class="error">{{ error }}</div>
        <div v-else>
          <div class="form-row">
            <div class="form-group">
              <label for="codigo">Código</label>
              <input type="text" v-model="colaborador.id" disabled />
            </div>
            <div class="form-group">
              <label for="nome">Nome Completo</label>
              <input type="text" v-model="colaborador.nome_completo" required @keypress="permitirSomenteLetras" />
            </div>
            <div class="form-group">
              <label for="apelido">Apelido</label>
              <input type="text" v-model="colaborador.apelido" required @keypress="permitirSomenteLetras" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="nome_pai">Nome do Pai</label>
              <input type="text" v-model="colaborador.nome_pai" @keypress="permitirSomenteLetras" />
            </div>
            <div class="form-group">
              <label for="nome_mae">Nome da Mãe</label>
              <input type="text" v-model="colaborador.nome_mae" @keypress="permitirSomenteLetras" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="cpf">CPF</label>
              <input
                type="text"
                v-model="colaborador.cpf"
                v-mask="'###.###.###-##'"
                :disabled="modo === 'visualizar'"
                required
                @input="formatarCpf"
                maxlength="14"
              />
              <div v-if="cpfInvalido" class="invalid-feedback">
                O CPF deve conter exatamente 11 dígitos numéricos.
              </div>
            </div>
            <div class="form-group">
              <label for="data_nascimento">Data de Nascimento</label>
              <input type="date" v-model="colaborador.data_nascimento" required />
            </div>
          </div>
          <div class="form-group">
            <label for="cargo">Cargo</label>
            <input type="text" v-model="colaborador.cargo" required />
          </div>
          <div class="button-group">
            <div class="left-buttons">
              <BaseButton type="cancelar" @click="cancelar">Cancelar</BaseButton>
            </div>
            <div class="right-buttons">
              <BaseButton type="submit" :disabled="cpfInvalido ||loading">Editar</BaseButton>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useEditar } from '~/composables/useEditar'
import BaseButton from '~/components/BaseButton.vue'
import logo from '~/assets/imagens/logo.png'
import { mask } from 'vue-the-mask'

const route = useRoute()
const { colaborador, salvar, cancelar, permitirSomenteNumeros, permitirSomenteLetras, cpfInvalido, formatarCpf, loading, error } = useEditar()

defineExpose({
  directives: {
    mask
  }
})
</script>
