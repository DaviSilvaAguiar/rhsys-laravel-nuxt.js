<template>
  <div>
    <!-- Cabeçalho -->
    <header class="bg-blue-500 text-white p-4">
      <nav>
        <ul class="flex justify-between">
          <li>
            <NuxtLink to="/" class="hover:underline">Lista de Colaboradores</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/colaborador" class="hover:underline">Cadastrar Colaborador</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Corpo do conteúdo -->
    <main class="p-4">
      <NuxtPage />
    </main>
  </div>
</template>
