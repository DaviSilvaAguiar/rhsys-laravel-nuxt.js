<template>
  <div class="container colaborador-container">
    <img :src="logo" alt="Logo" class="logo" />
    <h1 class="page-title">{{ modo === 'editar' ? 'Editar' : 'Cadastrar' }} Colaborador</h1>
    <div class="box">
      <form @submit.prevent="salvar">
        <div v-if="loading" class="loading">Carregando...</div>
        <div v-if="error" class="error">{{ error }}</div>
        <div v-else>
          <div class="form-row">
            <div class="form-group">
              <label for="nome">Nome Completo</label>
              <input type="text" v-model="colaborador.nome_completo" :disabled="modo === 'visualizar'" required @keypress="permitirSomenteLetras" />
            </div>
            <div class="form-group">
              <label for="apelido">Apelido</label>
              <input type="text" v-model="colaborador.apelido" :disabled="modo === 'visualizar'" required @keypress="permitirSomenteLetras" />
            </div>
            <div class="form-group">
              <label for="data_nascimento">Data de Nascimento</label>
              <input type="date" v-model="colaborador.data_nascimento" :disabled="modo === 'visualizar'" required />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="nome_pai">Nome do Pai</label>
              <input type="text" v-model="colaborador.nome_pai" :disabled="modo === 'visualizar'" required @keypress="permitirSomenteLetras"/>
            </div>
            <div class="form-group">
              <label for="nome_mae">Nome da Mãe</label>
              <input type="text" v-model="colaborador.nome_mae" :disabled="modo === 'visualizar'" required @keypress="permitirSomenteLetras"/>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="cpf">CPF</label>
              <input
                type="text"
                :value="colaborador.cpf"
                v-mask="'###.###.###-##'"
                :disabled="modo === 'visualizar'"
                required
                @input="(event) => { colaborador.cpf = event.target.value; formatarCpf(); }"
                maxlength="14"
              />
              <div v-if="cpfInvalido" class="invalid-feedback">
                O CPF deve conter exatamente 11 dígitos numéricos.
              </div>
            </div>
            <div class="form-group">
              <label for="cargo">Cargo</label>
              <input type="text" v-model="colaborador.cargo" :disabled="modo === 'visualizar'" required />
            </div>
          </div>
          <div class="button-group">
            <div class="left-buttons">
              <BaseButton type="cancelar" @click="cancelar">Cancelar</BaseButton>
              <BaseButton type="limpar" @click="limpar">Limpar</BaseButton>
            </div>
            <div class="right-buttons">
              <BaseButton type="submit" :disabled="cpfInvalido || loading">{{ modo === 'editar' ? 'Salvar' : 'Cadastrar' }}</BaseButton>
            </div>
          </div>
        </div> 
      </form>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useColaborador } from '~/composables/useColaborador'
import BaseButton from '~/components/BaseButton.vue'
import logo from '~/assets/imagens/logo.png'
import { mask } from 'vue-the-mask'

const route = useRoute()
const modo = route.params.modo

const { colaborador, salvar, limpar, cancelar, permitirSomenteNumeros, permitirSomenteLetras, formatarCpf, cpfInvalido, loading, error } = useColaborador();

defineExpose({
  directives: {
    mask
  }
})
</script>
