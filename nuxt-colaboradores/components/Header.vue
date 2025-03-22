<template>
  <header class="header-container">
    <nav class="nav-container">
      <NuxtLink 
        to="/" 
        class="nav-link" 
        :class="{ active: route.path === '/' }">
        Lista de Colaboradores
      </NuxtLink>
      <NuxtLink 
        to="/colaborador" 
        class="nav-link" 
        :class="{ active: route.path.startsWith('/colaborador') }">
        Cadastrar Colaborador
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped>
.header-container {
  width: 100%;
  max-width: 75vw;
  margin: 0 auto;
  padding-bottom: 0;
  background-color: #F4F8FB; /* Fundo Principal: Branco Gelo */
  position: relative;
  z-index: 1;
}

.nav-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.nav-link {
  padding: 10px 20px;
  background-color: #D3D3D3; /* Agora igual ao fundo da página */
  color: #1B3A4B; /* Texto Azul-Marinho */
  text-decoration: none;
  border-bottom: none;
  border-radius: 8px 8px 0 0;
  margin-right: 2px;
  position: relative;
  z-index: 2;
  font-size: 1.2rem; /* Tamanho da fonte */
  font-weight: bold; /* Texto em negrito */
  transition: background-color 0.3s, color 0.3s; /* Transição suave */
}

.nav-link.active {
  background-color: #A3BAC3; /* Fundo do Contêiner: Cinza Azul */
  border-bottom: none;
  color: #fff; /* Texto Branco para link ativo */
}

.nav-link:not(.active) {
  background-color: #D3D3D3; /* Igual ao body */
  color: #1B3A4B; /* Texto Azul-Marinho */
}

.nav-link:hover {
  background-color: #A3BAC3; /* Fundo do Contêiner: Cinza Azul */
  color: #fff; /* Texto Branco ao passar o mouse */
}
</style>
