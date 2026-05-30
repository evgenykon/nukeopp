<script setup lang="ts">
const { t } = useI18n()

const sections = [
  { to: "/survival/threat", key: "threat" },
  { to: "/survival/first-aid", key: "firstAid" },
  { to: "/survival/cheatsheet", key: "cheatsheet" },
  { to: "/survival/prepare", key: "prepare" },
]
</script>

<template>
  <div class="flex flex-col gap-6 px-6 py-8">
    <div>
      <h1 class="text-2xl font-bold">{{ t("pages.survival") }}</h1>
      <p class="mt-1 text-sm text-muted-foreground">{{ t("survivalIndex.subtitle") }}</p>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <NuxtLink
        v-for="s in sections"
        :key="s.to"
        :to="s.to"
        class="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-orange-500/40 hover:bg-orange-500/5"
      >
        <h2 class="mb-1 text-sm font-bold text-foreground">{{ t(`nav.survival_${s.key}`) }}</h2>
        <p class="text-xs leading-relaxed text-muted-foreground">{{ t(`survivalIndex.${s.key}Desc`) }}</p>
        <div class="mt-3 text-xs font-medium text-orange-400 opacity-0 transition-opacity group-hover:opacity-100">
          {{ t("nav.survival") }} →
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
