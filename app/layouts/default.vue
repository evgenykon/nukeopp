<template>
  <div class="flex h-screen flex-col bg-background">
    <AppBar />
    <main class="flex-1 overflow-y-auto">
      <slot />
    </main>
  </div>
</template>
