<template>
  <header class="header-container">
    <nav class="nav-container">
      <NuxtLink to="/" class="nav-link" :class="{ active: $route.path === '/' }">Lista de Colaboradores</NuxtLink>
      <NuxtLink to="/colaborador" class="nav-link" :class="{ active: $route.path === '/colaborador' }">Cadastrar Colaborador</NuxtLink>
    </nav>
  </header>
</template>